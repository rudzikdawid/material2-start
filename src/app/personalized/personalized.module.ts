import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule, MatGridListModule, MatIconModule,
  MatSelectModule,
  MatOptionModule,
  MatMenuModule,
  MatTooltipModule
} from '@angular/material';

import {StyleManager} from './style-manager/style-manager';
import {ThemeStorage, DocsSiteTheme} from './theme-picker/theme-storage/theme-storage';

import {ThemePickerComponent} from './theme-picker/theme-picker.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatMenuModule,
    MatButtonModule, MatGridListModule, MatIconModule, MatTooltipModule
  ],
  exports: [ThemePickerComponent],
  providers: [StyleManager, ThemeStorage],
  declarations: [ThemePickerComponent]
})
export class PersonalizedModule { }
