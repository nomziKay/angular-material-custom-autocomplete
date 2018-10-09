import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAutocompleteComponent } from './custom-autocomplete.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule
  ],
  declarations: [CustomAutocompleteComponent],
  exports: [CustomAutocompleteComponent]
})
export class CustomAutocompleteModule { }
