import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import * as collections from '../../../assets/JSON/collections.json';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgVideo from 'lightgallery/plugins/video';
import lgVideoThumbnail from 'lightgallery/plugins/vimeoThumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import { VimeoThumbnailSettings } from 'lightgallery/plugins/vimeoThumbnail/lg-vimeo-thumbnail-settings';
import { LightGallerySettings } from 'lightgallery/lg-settings';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
  encapsulation: ViewEncapsulation.None
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
    counter: true,
    plugins: [lgZoom,lgThumbnail,lgVideo,lgVideoThumbnail,lgAutoplay],
    controls: true,
    thumbnailnail:true,
    videojs: true,
    videojsOptions:{
      muted: true,
    },
    playsinline: true,
    slideShowAutoplay:true,
    autoplay:true,
    forceSlideShowAutoplay:true,
    autoplayVideoOnSlide:true,

    showVimeoThumbnails:true,
    showThumbnailWithPlayButton:true,
  } as LightGallerySettings;

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
