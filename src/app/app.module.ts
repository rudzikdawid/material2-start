import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PersonalizedService} from './personalized/personalized.service';
import {StyleManager} from './personalized/style-manager/style-manager';
import {ThemeStorage} from './personalized/theme-picker/theme-storage/theme-storage'
import {AppComponent} from './app.component';
import 'hammerjs';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'workspace', loadChildren: 'app/workspace/workspace.module#WorkspaceModule' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule, FlexLayoutModule],
  providers: [PersonalizedService, StyleManager, ThemeStorage],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
