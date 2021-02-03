import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadingAnimation:boolean = false;
  homeLinks: any = [];
  animation: boolean = true;
  @ViewChild('intro') intro: ElementRef;
  constructor() {
    this.loadAnimation();
    this.buildLinks();
   }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void{
    this.typeAnimation();
  }


  loadAnimation(){
    if(sessionStorage.getItem('visited'))
      this.loadingAnimation = false;
    else{
      this.loadingAnimation = true;
      sessionStorage.setItem('visited', 'true');
    }
  }
  buildLinks(){
    //Build the links and their routes
    let about = {name: 'about', route: '/about'};
    let projects = {name: 'projects', route: '/projects'};
    let interests = {name: 'interests', route: '/projects'};
    let contact = {name: 'contact', route: '/projects'};

    //Push links onto list
    this.homeLinks.push(about);
    this.homeLinks.push(projects);
    this.homeLinks.push(interests);
    this.homeLinks.push(contact);
  }

  onSubmit(){
    
  }

  typeAnimation(){
    let typer = new Typewriter(this.intro.nativeElement, {
      loop: false,
      delay: 75,
    });

    typer.typeString("Hello, world...").pauseFor(1000).deleteAll(100).pauseFor(1000).typeString("My name is...").start();
  }
}
