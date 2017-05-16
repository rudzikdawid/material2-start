import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DetailsComponent} from './details.component';
import {ShareMaterialModule} from '../../../share-material/share-material.module';

const detailsRoutes: Routes = [
  { path: ':id', component: DetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(detailsRoutes),
    ShareMaterialModule,
    CommonModule
  ],
  declarations: [DetailsComponent],
  entryComponents: [],
})
export class DetailsModule {}
