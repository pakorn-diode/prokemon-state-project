import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  protected aside: boolean = true;

  constructor() { }

  protected clickAside(): void {
    this.aside = !this.aside;
  }

  ngOnInit(): void {
  }

}
