import { Component, AfterViewInit,OnInit, HostListener, Inject, ElementRef, ViewChild } from '@angular/core';
import {trigger,state,style,animate,transition,} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { Router } from '@angular/router';

declare var anime: any;  
declare var NgForm:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Ascentias';
  constructor(@Inject(DOCUMENT) private document: Document,private formBuilder: FormBuilder, private contact: AppService, private router: Router) { }

  ngOnInit(): void {
  }
}
  