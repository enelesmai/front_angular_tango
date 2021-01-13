import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public catalogSelected: Catalog;
  public currentIndex: number;
  slideAtive = false;
  slideDuration = 3000;
  slideTimer = null;
  public catalogs: Array<Catalog> = [
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg'
    },
    {
      thumb: '/assets/images/thumb/white-light-thumb.jpeg',
      image: '/assets/images/white-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/pink-light-thumb.jpeg',
      image: '/assets/images/pink-light.jpeg',
    },
    {
      thumb: '/assets/images/thumb/tea-light-thumb.jpeg',
      image: '/assets/images/tea-light.jpeg',
    }
  ];

  constructor() { }

  ngOnInit() {
    this.currentIndex = 0;
    this.catalogSelected = this.catalogs[this.currentIndex];
  }

  selectedCatalog(index: number) {
    this.currentIndex = index;
    this.catalogSelected = this.catalogs[index];
  }

  previousClick() {
    this.selectedCatalog(this.currentIndex===0 ? this.catalogs.length-1: this.currentIndex-1);
  }

  nextClick() {
    this.selectedCatalog(this.currentIndex===this.catalogs.length-1 ? 0: this.currentIndex +1);
  }

  slideChange(checked) {
    
  }

  resetSlideTimer() {
    
  }

  onSlideChange = function() {
    
  }
}


export class Catalog {
  thumb: string;
  image: string;
}
