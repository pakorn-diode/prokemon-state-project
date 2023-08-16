import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    this.textObserver();
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
