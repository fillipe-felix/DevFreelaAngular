import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {LdWrapperModule} from "../../features/ld-wrapper/ld-wrapper.module";
import {LdButtonModule} from "../../shared/components/ld-button/ld-button.module";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    LdWrapperModule,
    LdButtonModule
  ]
})
export class ListModule { }
