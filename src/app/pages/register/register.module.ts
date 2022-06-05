import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {LdHeaderModule} from "../../features/ld-header/ld-header.module";
import {LdButtonModule} from "../../shared/components/ld-button/ld-button.module";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    LdHeaderModule,
    LdButtonModule
  ]
})
export class RegisterModule { }
