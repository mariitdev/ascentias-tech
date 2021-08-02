import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  title = 'Careers';
  isShowlang = true;	
  isShowleftmenu = false;
  toggleleftmenu(){
    this.isShowleftmenu = !this.isShowleftmenu;
  }
  togglelanguage() {
    this.isShowlang = !this.isShowlang;
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
