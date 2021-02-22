import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Blockbuster';
  screenWidth: number;

  constructor(
    public router: Router
  ) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  isMobile() {
    if (this.screenWidth <= 576) {
      return true;
    }
    return false;
  }

}
