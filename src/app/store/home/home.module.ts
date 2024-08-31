import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from "../../shared/shared.module";
import { Index2Component } from './index2/index2.component';


@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    Index2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
]
})
export class HomeModule { }
