import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    nome: '',
    dataNasc: '',
    cpf: '',
    sexo: '',
    altura: undefined,
    peso: undefined
  };

  buttons = [
    { name: 'Incluir', action: 'add', color: 'green' }
  ]

  @Output() formSubmit = new EventEmitter<any>();

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.formSubmit.emit(this.formData);
  }
}
