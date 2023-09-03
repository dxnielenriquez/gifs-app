import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImagesComponent } from './components/lazy-images/lazy-images.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImagesComponent
  ],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    SidebarComponent,
    LazyImagesComponent
  ]
})
export class SharedModule { }
