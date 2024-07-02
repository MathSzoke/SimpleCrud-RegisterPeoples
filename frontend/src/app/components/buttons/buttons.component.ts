// src/app/components/buttons/buttons.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() buttons: { name: string, action: string, color: string, style?: string }[] = [];
  @Output() buttonClick = new EventEmitter<string>();

  onButtonClick(action: string) {
    this.buttonClick.emit(action);
  }
}
