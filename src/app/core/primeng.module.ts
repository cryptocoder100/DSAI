import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import {GalleriaModule} from 'primeng/galleria';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputSwitchModule,
    GalleriaModule,
    ToggleButtonModule,
    DropdownModule,
  ],
  exports: [
    ButtonModule,
    TableModule,
    GalleriaModule,
    InputSwitchModule,
    ToggleButtonModule,
    DropdownModule,
  ]
})
export class PrimengModule { }
