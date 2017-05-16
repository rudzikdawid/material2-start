import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpModule} from '@angular/http';
import {
  MdListModule,
  MdCardModule,
  MdToolbarModule,
  MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdSelectModule,
  MdOptionModule,
  MdInputModule,
  MdSlideToggleModule,
  MdCheckboxModule,
  MdTabsModule
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
          { path: 'patients', loadChildren: 'app/workspace/patients/patients.module#PatientsModule' },
          { path: 'something', loadChildren: 'app/workspace/something/something.module#SomethingModule' },
          { path: 'settings', loadChildren: 'app/workspace/settings/settings.module#SettingsModule' },
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
    MdListModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdIconModule,
    MdSelectModule,
    MdOptionModule,
    MdInputModule,
    MdSlideToggleModule,
    MdCheckboxModule,
    MdTabsModule,
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
