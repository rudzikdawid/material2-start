import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpModule} from '@angular/http';
import {
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
  MatTabsModule
} from '@angular/material';
import {PersonalizedModule} from '../personalized/personalized.module';
import {WorkspaceComponent} from './workspace.component';


const workspaceRoutes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'patients', loadChildren: './patients/patients.module#PatientsModule' },
          { path: 'something', loadChildren: './something/something.module#SomethingModule' },
          { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FlexLayoutModule,
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
    PersonalizedModule,
    RouterModule.forChild(workspaceRoutes),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  declarations: [
    WorkspaceComponent
  ]
})
export class WorkspaceModule { }
