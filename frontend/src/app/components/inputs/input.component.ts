import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() ngModel: any;
  @Input() maxLength: number | null = null;
  @Output() ngModelChange = new EventEmitter<any>();
  @Output() inputChange = new EventEmitter<any>();

  private onChange = (value: any) => {};
  private onTouched = () => {};

  onInputChange(value: any) {
    if (this.type === 'number') {
      value = parseFloat(value);
    }
    this.ngModelChange.emit(value);
    this.inputChange.emit(value);
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.ngModel = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
