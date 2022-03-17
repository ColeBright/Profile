
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilemanagerModule } from './profilemanager/profilemanager.module';
import { CodingDetailsComponent } from './profilemanager/components/profiledetails/codingdetails.component'
import { NavBarComponent } from './profilemanager/nav/navbar.component'
import { CalisthenicsDetailsComponent } from './profilemanager/components/profiledetails/calisthenicsdetails.component';
import { CreationDetailsComponent } from './profilemanager/components/profiledetails/creationsdetails.component';
import { ConfabulationsComponent } from './profilemanager/components/profiledetails/confabulations.component'

const routes: Routes = [
  { path: 'profilemanager', loadChildren: () => import('./profilemanager/profilemanager.component').then(m => m.ProfilemanagerComponent) },
  { path: 'coding', component: CodingDetailsComponent},
  { path: 'calisthenics', component: CalisthenicsDetailsComponent},
  { path: 'creations', component: CreationDetailsComponent},
  { path: 'confabulations', component: ConfabulationsComponent},
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