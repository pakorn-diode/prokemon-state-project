import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/JSON/member.json';

@Component({
  selector: 'app-content-home-page',
  templateUrl: './content-home-page.component.html',
  styleUrls: ['./content-home-page.component.scss']
})
export class ContentHomePageComponent implements OnInit {

  public dataList: any = new Array<any>;
  public objectA: any;
  public words: string[] = [
    'Happy News Year 2024 To Yoga Class.',
    'Hello Jarwa.belle',
    'Hello Navjeet Singh.',
    'Hello Millymeet',
    'Hello Marynanthicha',
    'Hello Nancy Chawla Nan.',
    'Hello _stampph.',
    'Hello ohmm.prm.',
    'Hello pakorndiode.'
  ]
  constructor() { }

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

  public imageObserver(): void {
    const  imageObserver = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        // console.log('GG ::::',entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show-img')
        } else{
          entry.target.classList.remove('show-img')
        }
      });
    });

    const hiddenImage = document.querySelectorAll('.hidden-img');
    hiddenImage.forEach((el) => imageObserver.observe(el));
  }

  public textYObserver(): void {
    const  observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        // console.log('GG ::::',entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show-textY')
        } else{
          entry.target.classList.remove('show-textY')
        }
      });
    });

    const hiddenElement = document.querySelectorAll('.hidden-textY');
    hiddenElement.forEach((el) => observer.observe(el));
  }


  ngOnInit(): void {
    this.textObserver();
    this.imageObserver();
    this.textYObserver();
    this.objectA = jsonData;
    this.dataList = this.objectA.default;
  }

}
