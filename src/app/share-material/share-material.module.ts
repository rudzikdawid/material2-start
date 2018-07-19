import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {
  MatMenuModule,
  MatDialogModule,
  MatListModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatTabsModule,
  MatGridListModule
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatTabsModule,
    MatGridListModule
  ],
  declarations: []
})

export class ShareMaterialModule { }
