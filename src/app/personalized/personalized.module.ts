import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MatSelectModule,
  MatOptionModule,
} from '@angular/material';
import {ThemePickerComponent} from './theme-picker/theme-picker.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports: [ThemePickerComponent],
  providers: [],
  declarations: [ThemePickerComponent]
})
export class PersonalizedModule { }
