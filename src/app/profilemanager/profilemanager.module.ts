import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ProfilemanagerComponent } from './profilemanager.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component: ProfilemanagerComponent,
    children: [
      {path: '', component: MaincontentComponent}

    ]},
  { path: '**', redirectTo: ''}
  ]


@NgModule({
  declarations: [ProfilemanagerComponent, MaincontentComponent, SidenavComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(routes)

  ],
  exports: [
    SidenavComponent
  ]
})
export class ProfilemanagerModule { }
