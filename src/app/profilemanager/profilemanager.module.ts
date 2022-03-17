import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ProfilemanagerComponent } from './profilemanager.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavBarComponent } from './nav/navbar.component';
import { CodingDetailsComponent } from './components/profiledetails/codingdetails.component';
import { CalisthenicsDetailsComponent } from './components/profiledetails/calisthenicsdetails.component'
import { CreationDetailsComponent } from './components/profiledetails/creationsdetails.component'
import { ConfabulationsComponent } from './components/profiledetails/confabulations.component'

const routes: Routes = [
  { path: '', component: ProfilemanagerComponent,
    children: [
      {path: '', component: MaincontentComponent},
      {path: 'coding', component: CodingDetailsComponent},
      {path: 'calisthenics', component: CalisthenicsDetailsComponent},
      {path: 'creations', component: CreationDetailsComponent},
      {path: 'confabulations', component: ConfabulationsComponent}
    ]},
  { path: '**', redirectTo: ''}
  ]


@NgModule({
  declarations: [ProfilemanagerComponent, MaincontentComponent, SidenavComponent, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(routes)

  ],
  exports: [
    SidenavComponent,
    NavBarComponent
  ]
})
export class ProfilemanagerModule { }
