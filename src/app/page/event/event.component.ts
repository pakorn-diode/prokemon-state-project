import { Component, OnInit } from '@angular/core';
import * as event from '../../../assets/JSON/event.json';
import * as profile from '../../../assets/JSON/profile.json';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGalleryAllSettings } from 'lightgallery/lg-settings';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public objectEvent: any;
  public objectMember: any;
  public eventList: Array<any> = new Array<any>();
  public profileList: Array<any> = new Array<any>();

  constructor() { }

  public ngOnInit(): void {
    this.textObserver();
    this.objectEvent = event;
    this.objectMember = profile;
    this.eventList = this.objectEvent.default;
    this.profileList = this.objectMember.default;
    console.log('eventList', this.eventList);
    console.log('profileList', this.profileList);
    
  }

  public textObserver(): void {
    const  observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        // console.log('GG ::::',entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show-text')
        } else{
          entry.target.classList.remove('show-text')
        }
      });
    });

    const hiddenElement = document.querySelectorAll('.hidden-text');
    hiddenElement.forEach((el) => observer.observe(el));
  }

  settings:Partial<LightGalleryAllSettings> = {
    counter: true,
    controls: true,
    animateThumb:true,
    resetScrollPosition:true,
    plugins: [lgZoom,lgThumbnail],
    thumbnail:true

  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

}
