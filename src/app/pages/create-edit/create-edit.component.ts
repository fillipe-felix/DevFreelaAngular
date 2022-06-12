import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CreateEditService} from "./services/create-edit.service";
import {IProject} from "../../shared/interfaces/IProject";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {msg} from "../../shared/Utils/msg";

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
  msg = msg

  constructor(private router: Router,
              private projectCreateEditService: CreateEditService,
              private fb: FormBuilder) {
    this.id = history.state.id
    this.screenType = this.id ? 'edit' : 'create'
  }

  createEditForm: FormGroup = this.fb.group({
    title:['', [Validators.required]],
    totalCost:['', [Validators.required]],
    description:['', [Validators.required]]
  })

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    if (this.createEditForm.valid) {
      // Inicia a massa de dados (payload)

      let payload: IProject = this.createEditForm.value;
      payload.idClient = localStorage.getItem("idClient")

      if (this.screenType === 'create') {
        this.projectCreateEditService.postProject(payload)
          .subscribe(
            (response: IProject) => {
              alert('Cadastrado com sucesso!');
              this.router.navigateByUrl('list')
            }
          )
      }

      if (this.screenType === 'edit') {
        this.projectCreateEditService.putProject(payload, this.id)
          .subscribe(
            (response: IProject) => {
              alert('Editado com sucesso!');
              this.router.navigateByUrl('list')
            }
          )
      }
    } else {
      this.createEditForm.markAllAsTouched();
    }
  }

  fillInputs() {
    if (this.screenType === 'edit') {
      fetch(`https://622cd1e6087e0e041e147214.mockapi.io/api/projects/${this.id}`)
        .then(response => response.json())
        .then(project => {
          //preenche os campos quando clicar em editar
          this.createEditForm.patchValue({
            title: project.title,
            totalCost: project.totalCost,
            description: project.description
            }
          )
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

  isInvalid(inputName: string, validatorName: string){
    const formControl: any = this.createEditForm.get(inputName);

    if (formControl.errors !== null){
      return formControl.errors[validatorName] && formControl.touched
    }
  }
}
