import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {
  MdMenuModule,
  MdDialogModule,
  MdListModule,
  MdCardModule,
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdSelectModule,
  MdOptionModule,
  MdInputModule,
  MdSlideToggleModule,
  MdCheckboxModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    FlexLayoutModule,
    MdMenuModule,
    MdDialogModule,
    MdListModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdSelectModule,
    MdOptionModule,
    MdInputModule,
    MdSlideToggleModule,
    MdCheckboxModule,
    MdTabsModule
  ],
  declarations: []
})

export class ShareMaterialModule { }
