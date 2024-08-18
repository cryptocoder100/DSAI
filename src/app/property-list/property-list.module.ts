import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { PrimengModule } from '../core/primeng.module';



@NgModule({
  declarations: [
    PropertiesListComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class PropertyListModule { }
