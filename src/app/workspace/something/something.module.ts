import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SomethingComponent} from './something.component';
import { GridsterModule } from 'angular2gridster';
import { ChartistModule } from 'ng-chartist';


const somethingRoutes: Routes = [
  { path: '', component: SomethingComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(somethingRoutes),
    GridsterModule,
    ChartistModule,
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [SomethingComponent]
})
export class SomethingModule { }
