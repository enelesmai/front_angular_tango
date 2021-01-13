import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import { Catalog } from '../catalog/catalog.component';

@Component({
  selector: 'app-catalog-items',
  templateUrl: './catalog-items.component.html',
  styleUrls: ['./catalog-items.component.css']
})
export class CatalogItemsComponent implements OnInit {

  @Input('catalogs') items: Array<Catalog>;
  @Input('currentIndex') currentIndex: number;
  @Output() selectedCatalog: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  selectImage(value: number){
    this.selectedCatalog.emit(value);
  }

  ngOnInit() {
  }

  onImageSelect(index) {
    this.selectImage(index);
  }

}
