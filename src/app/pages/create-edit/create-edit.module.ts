import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEditRoutingModule } from './create-edit-routing.module';
import { CreateEditComponent } from './create-edit.component';
import {LdWrapperModule} from "../../features/ld-wrapper/ld-wrapper.module";
import {LdButtonModule} from "../../shared/components/ld-button/ld-button.module";


@NgModule({
  declarations: [
    CreateEditComponent
  ],
  imports: [
    CommonModule,
    CreateEditRoutingModule,
    LdWrapperModule,
    LdButtonModule
  ]
})
export class CreateEditModule { }
