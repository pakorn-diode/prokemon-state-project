import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  constructor(){ 
    this.darkMode()
  } 

  public darkMode(): void {
    if (localStorage.getItem('color-mode') !== null) {
      if (localStorage.getItem('color-mode') === 'light') {
        localStorage.setItem('color-mode', 'dark')
      } else {
        localStorage.setItem('color-mode', 'light')
      }
    } else {
      localStorage.setItem('color-mode', 'light')
    }
  }

}
