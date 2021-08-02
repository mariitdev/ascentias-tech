import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  title = 'Technologies';
  isShowlang = true;	
  isShowleftmenu = false;
  toggleleftmenu(){
    this.isShowleftmenu = !this.isShowleftmenu;
  }
  togglelanguage() {
    this.isShowlang = !this.isShowlang;
  }

  constructor() { }

  ngOnInit() {
  }

}
