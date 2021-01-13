import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public catalogSelected: Catalog;
  public currentIndex: number;
  public catalogs: Array<Catalog> = [
    {
      thumb: '/assets/images/thumb/mobile-front-thumb.jpeg',
      image: '/assets/images/mobile-front.jpeg'
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
  slideAtive = false;
  slideDuration = 3000;
  slideTimer = null;
  
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

  changeSlideStatus(event){
    this.slideAtive = event.target.checked;
    this.slideChange(this.slideAtive);
  }

  slideChange(checked) {
    if (checked) {
      this.nextClick();
      this.slideTimer = this.onSlideChange();
    } else {
      this.resetSlideTimer();
    }
  }

  resetSlideTimer() {
    clearTimeout(this.slideTimer);
  }

  onSlideChange = function() {
    return setInterval(()=>{
      this.nextClick();
    }, this.slideDuration);
  }
}


export class Catalog {
  thumb: string;
  image: string;
}
