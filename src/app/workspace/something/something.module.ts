import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomethingComponent} from './something.component';

const somethingRoutes: Routes = [
  { path: '', component: SomethingComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(somethingRoutes)
  ],
  declarations: [SomethingComponent]
})
export class SomethingModule { }
