import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
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
    HttpClientModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    FlexLayoutModule,
  ],
  providers: [PersonalizedService, StyleManager, ThemeStorage, { provide: LOCALE_ID, useValue: 'ru' }],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
