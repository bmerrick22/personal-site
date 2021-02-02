import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ben Merrick';
  toggleNav: boolean = true;
  constructor(private router: Router){
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd)
        if(val.url == '/')
          this.toggleNav = true;
        else
          this.toggleNav = false;
    });
  }
}
