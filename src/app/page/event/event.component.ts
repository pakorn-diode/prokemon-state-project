import { Component, OnInit } from '@angular/core';
import * as event from '../../../assets/JSON/event.json';
import * as member from '../../../assets/JSON/member.json';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public objectEvent: any;
  public objectMember: any;
  public eventList: Array<any> = new Array<any>();
  public memberList: Array<any> = new Array<any>();

  constructor() { }

  public ngOnInit(): void {
    this.textObserver();
    this.objectEvent = event;
    this.objectMember = member;
    this.eventList = this.objectEvent.default;
    this.memberList = this.objectMember.default;
    console.log('eventList', this.eventList);
    console.log('memberList', this.memberList);
    
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

}
