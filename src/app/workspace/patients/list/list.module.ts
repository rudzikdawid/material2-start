import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list.component';
import {ShareMaterialModule} from '../../../share-material/share-material.module';
import {DialogComponent} from '../../../dialog/dialog.component';

const listRoutes: Routes = [
  { path: '', component: ListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(listRoutes),
    ShareMaterialModule,
    CommonModule
  ],
  declarations: [ListComponent, DialogComponent],
  entryComponents: [DialogComponent],
})
export class ListModule {}
