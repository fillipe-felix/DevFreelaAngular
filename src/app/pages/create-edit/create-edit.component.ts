import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CreateEditService} from "./services/create-edit.service";
import {IProject} from "../../shared/interfaces/IProject";

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  id:string;
  screenType: 'create' | 'edit';
  actionButtonText: string = '';
  title: string = ''

  constructor(private router: Router, private projectCreateEditService: CreateEditService) {
    this.id = history.state.id
    this.screenType = this.id ? 'edit' : 'create'
  }

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    // Inicia a massa de dados (payload)
    let payload: IProject = {
      title: (document.querySelector("#title") as any).value,
      totalCost: (document.querySelector("#totalCost") as any).value,
      description: (document.querySelector("#description") as any).value,
      idClient: localStorage.getItem("idClient")
    }

    console.log(payload)

    if (this.screenType === 'create'){
      this.projectCreateEditService.postProject(payload)
        .subscribe(
          (response: IProject) => {
            alert('Cadastrado com sucesso!');
            this.router.navigateByUrl('list')
          }
        )
    }

    if (this.screenType === 'edit'){
      this.projectCreateEditService.putProject(payload, this.id)
        .subscribe(
          (response: IProject) => {
            alert('Editado com sucesso!');
            this.router.navigateByUrl('list')
          }
        )
    }
  }

  fillInputs() {
    if (this.screenType === 'edit') {
      fetch(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${this.id}`)
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
      this.actionButtonText = 'Cadastrar'
      this.title = 'Vamos cadastrar seu novo projeto!'
    }

    // MODO EDITAR
    if (this.screenType == 'edit') {
      this.actionButtonText = 'Salvar'
      this.title = 'Editar projeto'
    }
  }
}
