import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PessoaService } from './../server/pessoa.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="d-flex flex-column align-items-center">
      <app-form (formSubmit)="handleFormSubmit($event)"></app-form>
      <div class="d-flex justify-content-around w-75 mt-3 align-items-center">
        <app-input
          class="w-100 form-control"
          placeholder="Pesquisar..."
          type="text"
          (inputChange)="searchQuery = $event">
        </app-input>
        <app-buttons
          [buttons]="buttonSearch"
          (buttonClick)="handleButtonClick($event)">
        </app-buttons>
      </div>
      <div class="d-flex w-100 justify-content-center">
        <app-grid
          class="m-5 w-100"
          [columns]="columns" 
          [data]="data"
          (action)="handleGridAction($event)">
        </app-grid>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  buttonSearch = [{ name: 'Pesquisar', action: 'search', color: 'blue' }];
  columns = ['#', 'Nome', 'Data Nasc', 'CPF', 'Sexo', 'Altura', 'Peso'];
  data: any[] = [];
  searchQuery: string = '';

  constructor(private pessoaService: PessoaService, private toastr: ToastrService) {}

  ngOnInit() {
    this.getAllPessoas();
  }

  getAllPessoas() {
    this.pessoaService.getAllPessoas().subscribe(
      data => {
        this.data = data;
      },
      error => {
        this.toastr.error('Erro ao buscar pessoas', 'Erro');
      }
    );
  }

  handleButtonClick(action: string) {
    if (action === 'search') {
      this.searchPessoas(this.searchQuery);
    }
  }

  searchPessoas(query: string) {
    this.pessoaService.searchPessoas(query).subscribe(
      data => {
        this.data = data;
      },
      error => {
        this.toastr.error('Erro ao pesquisar pessoas', 'Erro');
      }
    );
  }

  handleFormSubmit(formData: any) {
    this.pessoaService.addPessoa(formData).subscribe(
      response => {
        this.toastr.success('Pessoa adicionada com sucesso!', 'Sucesso');
        this.getAllPessoas();
      },
      error => {
        this.toastr.error('CPF duplicado. Por favor, insira um CPF único.', 'Erro');
      }
    );
  }

  handleGridAction(event: { action: string, data: any }) {
    switch (event.action) {
      case 'confirmEdit':
        this.pessoaService.updatePessoa(event.data.id, event.data).subscribe(
          () => {
            this.toastr.success('Pessoa atualizada com sucesso!', 'Sucesso');
            this.getAllPessoas();
          },
          error => {
            this.toastr.error('Erro ao atualizar pessoa', 'Erro');
          }
        );
        break;
      case 'delete':
        this.pessoaService.deletePessoa(event.data.id).subscribe(
          () => {
            this.toastr.success('Pessoa excluída com sucesso!', 'Sucesso');
            this.getAllPessoas();
          },
          error => {
            this.toastr.error('Erro ao excluir pessoa', 'Erro');
          }
        );
        break;
      case 'idealWeight':
        this.pessoaService.calculateIdealWeight(event.data.id).subscribe(
          (response) => {
            this.toastr.info(`${response}`, 'Peso Ideal');
          },
          error => {
            this.toastr.error('Erro ao calcular peso ideal', 'Erro');
          }
        );
        break;
      default:
        break;
    }
  }
}
