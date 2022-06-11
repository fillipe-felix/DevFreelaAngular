import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateEditComponent} from "./create-edit.component";

const routes: Routes = [
  {
    path: '',
    component: CreateEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEditRoutingModule { }
