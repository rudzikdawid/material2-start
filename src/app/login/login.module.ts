import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MdCardModule,
  MdButtonModule,
  MdSelectModule,
  MdOptionModule,
  MdInputModule,
} from '@angular/material';

import {PersonalizedModule} from '../personalized/personalized.module';
import {LoginComponent} from './login.component';


const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    MdCardModule,
    MdButtonModule,
    MdSelectModule,
    MdOptionModule,
    MdInputModule,
    FormsModule,
    FlexLayoutModule,
    PersonalizedModule,
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
