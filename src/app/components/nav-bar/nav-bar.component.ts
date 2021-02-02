import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navLinks: any = []
  @ViewChild('menu') menu: ElementRef;
  @ViewChild('nav') nav: ElementRef;

  on: boolean = false;

  constructor(private router: Router) {
    this.buildLinks();
  }

  ngOnInit(): void {
  }


  buildLinks() {
    //Build the links and their routes
    let about = { name: 'about', route: '/about' };
    let projects = { name: 'projects', route: '/projects' };
    let interests = { name: 'interests', route: '/interests' };
    let contact = { name: 'contact', route: '/contact' };

    //Push links onto list
    this.navLinks.push(about);
    this.navLinks.push(projects);
    this.navLinks.push(interests);
    this.navLinks.push(contact);
  }

  myFunction() {
    this.menu.nativeElement.classList.toggle('change');

    if (this.on) { this.fadeOut(); } else { this.fadeIn(); }
    this.on = !this.on;

  }

  fadeOut() {
    document.getElementById("fader").style.display = "none";
    document.getElementById("fader").style.transition = "opacity 0.5s linear 0s";
    document.getElementById("fader").style.opacity = '0';
    this.nav.nativeElement.style.transition = "background-color 0.5s linear 0s";
    this.nav.nativeElement.style.backgroundColor = 'transparent';
  }

  fadeIn() {
    document.getElementById("fader").style.display = "block";
    document.getElementById("fader").style.transition = "opacity 0.5s linear 0s";
    document.getElementById("fader").style.opacity = '1';
    this.nav.nativeElement.style.transition = "background-color 0.5s linear 0s";
    this.nav.nativeElement.style.backgroundColor = 'black';
  }


  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
}
