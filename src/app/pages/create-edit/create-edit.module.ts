import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEditRoutingModule } from './create-edit-routing.module';
import { CreateEditComponent } from './create-edit.component';
import {LdWrapperModule} from "../../features/ld-wrapper/ld-wrapper.module";


@NgModule({
  declarations: [
    CreateEditComponent
  ],
  imports: [
    CommonModule,
    CreateEditRoutingModule,
    LdWrapperModule
  ]
})
export class CreateEditModule { }
