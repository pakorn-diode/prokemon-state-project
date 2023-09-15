import { Component, Input, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import * as collections from '../../../assets/JSON/collections.json';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  @Input('data-sub-html') dataSubHtml: any

  public collections: any = new Array<any>;
  public collectionList: any = new Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.collections = collections 
    this.collectionList = this.collections.default;
  }

  settings = {
    counter: false,
    plugins: [lgZoom],
    controls: false
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
