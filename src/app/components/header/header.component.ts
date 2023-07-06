import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public menuFn():void {
    const menuBtn = document.getElementById("btn-hamburger");
    menuBtn?.classList.toggle("animeOpenClose")
  }

  ngOnInit(): void {
  }

}
