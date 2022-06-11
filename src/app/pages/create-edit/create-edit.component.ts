import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  urlSearchParams: any = new URLSearchParams(window.location.search);
  params: any = Object.fromEntries(this.urlSearchParams.entries());

  // Type: 'create' | 'edit'
  screenType = this.params.id ? 'edit' : 'create';

  constructor() { }

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    // Inicia a massa de dados (payload)
    let payload = {
      title: (document.querySelector("#title") as any).value,
      totalCost: (document.querySelector("#totalCost") as any).value,
      description: (document.querySelector("#description") as any).value,
      idClient: localStorage.getItem("idClient")
    }

    // Enviar para API
    fetch(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects${this.screenType === 'edit' ? ('/' + this.params.id) : ''}`, {
      method: this.screenType === 'edit' ? 'PUT' : 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        if (this.screenType === 'edit') {
          alert('Editado com sucesso!');
        } else {
          alert('Cadastrado com sucesso!');
        }

        window.location.href = "list.html";
      })
  }

  fillInputs() {
    if (this.screenType === 'edit') {
      fetch(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${this.params.id}`)
        .then(response => response.json())
        .then(project => {
          (document.querySelector("#title") as any).value = project.title;
          (document.querySelector("#totalCost") as any).value = project.totalCost;
          (document.querySelector("#description") as any).value = project.description;
        })
    }
  }

  setScreenTypeTexts() {
    // MODO CRIAR
    if (this.screenType == 'create') {
      (document.querySelector('#main-title') as any).innerText = "Vamos cadastrar seu novo projeto!";
      (document.querySelector('#action-button') as any).innerText = "Cadastrar";
    }

    // MODO EDITAR
    if (this.screenType == 'edit') {
      (document.querySelector('#main-title') as any).innerText = "Editar projeto";
      (document.querySelector('#action-button') as any).innerText = "Salvar";
    }
  }
}
