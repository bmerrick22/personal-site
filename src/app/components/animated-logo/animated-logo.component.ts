import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-logo',
  templateUrl: './animated-logo.component.html',
  styleUrls: ['./animated-logo.component.css']
})
export class AnimatedLogoComponent implements OnInit {
  @ViewChild('logo') logo :ElementRef;
  constructor() {
  }

  ngOnInit(): void {
  
  }

  /*
  ngAfterViewChecked(){
    console.log(this.logo.nativeElement.children);
    let children = this.logo.nativeElement.children;
    for(let i = 1; i < 11; i++){
      console.log(children[i].getTotalLength());
    }
  }*/

}
