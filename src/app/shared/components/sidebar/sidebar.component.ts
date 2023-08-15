import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {} //inject service

  get tags() {
    return this.gifsService.tagsHistory;

  }

  searchTag( tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
