import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SomethingComponent} from './something.component';
import { GridsterModule } from 'angular2gridster';
import {FlexLayoutModule} from '@angular/flex-layout';


const somethingRoutes: Routes = [
  { path: '', component: SomethingComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(somethingRoutes),
    GridsterModule,
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [SomethingComponent]
})
export class SomethingModule { }
