import {NgModule} from '@angular/core';
import {RouterModule, Routes, RouterLinkActive } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {
  MatListModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatTabsModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

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
    HttpClientModule,
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
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    RouterModule.forChild(workspaceRoutes),
  ],
  exports: [
    RouterModule, RouterLinkActive
  ],
  providers: [],
  declarations: [
    WorkspaceComponent
  ]
})
export class WorkspaceModule { }
