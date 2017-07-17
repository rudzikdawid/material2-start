import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PatientsComponent} from './patients.component';
import {PersonalizedModule} from '../../personalized/personalized.module';
import {ShareMaterialModule} from '../../share-material/share-material.module';
import {PatientsService} from './patients.service';

const patientsRoutes: Routes = [
  {
    path: '',
    component: PatientsComponent,
    children: [
      { path: 'details', loadChildren: './details/details.module#DetailsModule' },
      { path: 'list',    loadChildren: './list/list.module#ListModule' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(patientsRoutes),
    PersonalizedModule,
    ShareMaterialModule,
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [PatientsService],
  declarations: [PatientsComponent],
  entryComponents: [],
})
export class PatientsModule {}
