import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEditRoutingModule } from './create-edit-routing.module';
import { CreateEditComponent } from './create-edit.component';
import {LdWrapperModule} from "../../features/ld-wrapper/ld-wrapper.module";
import {LdButtonModule} from "../../shared/components/ld-button/ld-button.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    CreateEditComponent
  ],
  imports: [
    CommonModule,
    CreateEditRoutingModule,
    LdWrapperModule,
    LdButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CreateEditModule { }
