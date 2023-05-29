import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public words: string[] = [
    'Happy News Year 2024 To Yoga Class.',
    'Hello Tinker JingleBelle.',
    'Hello Navjeet Singh.',
    'Hello Jasmeet.',
    'Hello Mary Nanthicha.',
    'Hello Nancy Chawla Nan.',
    'Hello _stampph.',
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


  ngOnInit(): void {
    this.textObserver();
    this.imageObserver();
  }

}
