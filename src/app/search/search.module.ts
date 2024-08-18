import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressInfoSearchComponent } from './address-info-search/address-info-search.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../core/primeng.module';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AddressInfoSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    CardModule,
    DropdownModule,
  ]
})
export class SearchModule { }
