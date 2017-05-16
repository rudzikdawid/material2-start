import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { RouterModule, Routes } from '@angular/router';

const settingsRoutes: Routes = [
  { path: '', component: SettingsComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes)
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule {}
