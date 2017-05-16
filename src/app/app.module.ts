import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PersonalizedService} from './personalized/personalized.service';
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
  providers: [PersonalizedService],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
