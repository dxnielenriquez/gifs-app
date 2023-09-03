import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  // constructor( private gifsService: GifsService ) {} //inject service

  // get tags() {
  //   return this.gifsService.tagsHistory;

  // }

  // searchTag( tag: string): void {
  //   this.gifsService.searchTag(tag);
  // }
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  opened:  boolean = false;
  showNewMenuItem = false;
  showSubSubMenu: boolean = false;
  showSubmenu3: boolean = false;
  showSubSubMenu3: boolean = false;
  showSubmenu4: boolean = false;
  showSubSubMenu4: boolean = false;
  showSubSubMenuSimulacros: boolean = false;
  showSubSubMenuCentral: boolean = false;
  showSubSubMenuJornada: boolean = false;
  showSubSubMenuInforme: boolean = false;
  showSubSubMenuPartidos: boolean = false;
  showSubSubMenuCandidatos: boolean = false;
  showSubSubMenuParametros: boolean = false;
  showSubSubMenuPrep: boolean = false;
  showSubSubMenuSimulacros2: boolean = false;
  showSubSubMenudatabase: boolean = false;
  showSubSubMenuCotejo: boolean = false;





  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }


}
