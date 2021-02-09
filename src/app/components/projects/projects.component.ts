import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  skills = [];
  nextIcon: FontAwesomeModule = faChevronDown;

  constructor() {
    this.buildSkills();
   }

  ngOnInit(): void {
  }


  buildSkills(){
    this.skills.push('html');
    this.skills.push('design');
    this.skills.push('css');
    this.skills.push('javascript');
    this.skills.push('typescript');
    this.skills.push('angular');
    this.skills.push('python');
    this.skills.push('c');
    this.skills.push('c++');
    this.skills.push('java');
    this.skills.push('design');
    this.skills.push('ui/ux');
    console.log(this.skills);
  }

}
