import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SomethingComponent} from './something.component';
import { GridsterModule } from 'angular2gridster';
import { ChartistModule } from 'ng-chartist';
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';


const somethingRoutes: Routes = [
  { path: '', component: SomethingComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(somethingRoutes),
    GridsterModule.forRoot(),
    ChartistModule,
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [SomethingComponent]
})
export class SomethingModule { }
