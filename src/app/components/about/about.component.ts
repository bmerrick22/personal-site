import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('map') map: ElementRef;
  explore:boolean = false;
  socials: any = [];
  exitIcon: FontAwesomeModule = faSignOutAlt;
  constructor() {
    this.buildSocialLinks();
   }

  ngOnInit(): void {
  }

  buildSocialLinks(){
    //Build social media objects
    let facebook = {icon: faFacebook, url: 'https://www.facebook.com/ben.merrick.35/'};
    let linkedin = {icon: faLinkedin, url: 'https://www.linkedin.com/in/bfmerrick/'};
    let github = {icon: faGithub, url: 'https://github.com/bmerrick22'};
    let instagram = {icon: faInstagram, url: 'https://www.instagram.com/benmerrick22/'};

    //Push onto the array
    this.socials.push(instagram);
    this.socials.push(github);
    this.socials.push(linkedin);
    this.socials.push(facebook);
  }

  exploreMap(){
    console.log("Toggling exploring map!");
    this.explore = !this.explore;
    }

}
