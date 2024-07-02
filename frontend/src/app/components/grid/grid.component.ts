import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Output() action = new EventEmitter<{ action: string, data: any }>();
  
  buttons = [
    { name: 'Alterar', action: 'edit', color: 'orange' },
    { name: 'Excluir', action: 'delete', color: 'red' },
    { name: 'Peso ideal', action: 'idealWeight', color: 'blue', style: 'inline-size: max-content' }
  ];

  handleActionClick(action: string, row: any) {
    switch (action) {
      case 'edit':
        row.isEditing = true;
        break;
      case 'idealWeight':
        this.calculateIdealWeight(row);
        break;
      default:
        this.action.emit({ action, data: row });
    }
  }

  calculateIdealWeight(row: any) {
    this.action.emit({ action: 'idealWeight', data: row });
  }

  confirmEdit(row: any) {
    row.isEditing = false;
    this.action.emit({ action: 'confirmEdit', data: row });
  }

  cancelEdit(row: any) {
    row.isEditing = false;
  }
}
