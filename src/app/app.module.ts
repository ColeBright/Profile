
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilemanagerModule } from './profilemanager/profilemanager.module';

const routes: Routes = [
  { path: 'profilemanager', loadChildren: () => import('./profilemanager/profilemanager.component').then(m => m.ProfilemanagerComponent) },
  { path: '**', redirectTo: 'profilemanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProfilemanagerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }