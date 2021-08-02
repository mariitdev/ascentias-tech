import { Component, AfterViewInit,OnInit, HostListener, Inject, ElementRef, ViewChild } from '@angular/core';
import {trigger,state,style,animate,transition,} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var anime: any;  
declare var NgForm:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[ 
    trigger('fade',
	    [ 
	      state('void', style({ opacity : 0})),
	      transition(':enter',[ animate(300)]),
	      transition(':leave',[ animate(500)]),
	    ],
	),
	trigger('openClose', [
      // ...
      state('open', style({
        width: '135px',
      })),
      state('closed', style({
        width: '90px',
      })),
      transition('open => closed', [
        animate('0.5s ease-out')
      ]),
      transition('closed => open', [
        animate('0.5s ease-in')
      ]),
    ]),
    trigger('hovercontent', [

      	state('hoverd', style({
         	transform: 'scale(1.1)'
      	})),
	  	transition('unhoverd => hoverd', [  
	  		animate('0.5s ease-in')
   		]),
      	transition('hoverd => unhoverd', [
  			animate('0.5s ease-out')
      	]),
    ]),
    trigger('hovercontent2', [

      	state('hoverd2', style({
         	transform: 'scale(1.1)'
      	})),
	  	transition('unhoverd2 => hoverd2', [  
	  		animate('0.5s ease-in')
   		]),
      	transition('hoverd2 => unhoverd2', [
  			animate('0.5s ease-out')
      	]),
    ]),
    trigger('hovercontent3', [

      	state('hoverd3', style({
         	transform: 'scale(1.1)'
      	})),
	  	transition('unhoverd3 => hoverd3', [  
	  		animate('0.5s ease-in')
   		]),
      	transition('hoverd3 => unhoverd3', [
  			animate('0.5s ease-out')
      	]),
    ])]
})
export class HomeComponent implements OnInit {

  title = 'Home';
  isOpen = false;
  formGroup;
  submitted = false;
  showMsg = false;
  @ViewChild(FormGroupDirective, {static: false}) formDirective: FormGroupDirective;
  @ViewChild('stickyMenu', {static:false}) menuElement: ElementRef;

  banner: boolean = false;
  elementPosition: any;
  constructor(@Inject(DOCUMENT) private document: Document,private formBuilder: FormBuilder, private contact: AppService, private router: Router, private route: ActivatedRoute) { 
  this.formGroup = this.formBuilder.group({
      name: '',
      email: '',
      contact_number: '',
      company: '',
      country: '',
      service: '',
      comments: ''
    });
    }
  ngOnInit(): void {
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
    this.formGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    contact_number: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    company: new FormControl(''),
    country: new FormControl(''),
    service: new FormControl(''),
    comments: new FormControl('', [Validators.required])
    })
  }
  get fval() {
    return this.formGroup.controls;
  }
  private submitContact(FormData: any, formDirective: FormGroupDirective) : void {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }else{
	    FormData.service = this.selectedItemsList;
	    FormData.country = this.country_elementinput;
	    this.contact.contactForm(FormData)
	      .subscribe(response => {
	      console.log(response);
	        this.showMsg= true;
	      	setTimeout(() => {
	      		this.showMsg= false;
	      	}, 5000)
	        this.formDirective.resetForm();
	        this.submitted = false;
	      }, error => {
	        console.warn(error.responseText)
	        console.log({ error })
	      })
    }
  }
  @HostListener('window:resize', ['$event'])onResize(event) {
    this.elementPosition = this.menuElement.nativeElement.offsetHeight;
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
	this.isOpen = false;
  const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition-5){
     	let element = document.getElementById('navbar');
     	let elementhead = document.getElementById('headerstick');
     	let element_header_logo = document.getElementById('header-logo');

     	elementhead.classList.add('header-comp-sticky');
     	element.classList.add('sticky');
     	element_header_logo.classList.add('logo_img');
      document.getElementById('megamenu-dropdown').style.display = "block";
      document.getElementById('container_left_menu').style.display = "block";
      this.isOpen = false;
     
    }else {
     	let element = document.getElementById('navbar');
     	let elementhead = document.getElementById('headerstick');
     	let element_header_logo = document.getElementById('header-logo');

     	elementhead.classList.remove('header-comp-sticky');
     	element.classList.remove('sticky'); 
     	element_header_logo.classList.remove('logo_img');
      document.getElementById('megamenu-dropdown').style.display = "none";
      document.getElementById('container_left_menu').style.display = "none";
      this.isShowleftmenu = false;
      this.isOpen = true;

    }
  }

  isShowlang = true;
  isShowwhoweare = true;
  isShowwhatwedo = true;
  isShowweworkwith = true;
  isShowtechnologies = true;	
  isShowleftmenu = false;
  toggleleftmenu(){
    this.isShowleftmenu = !this.isShowleftmenu;
  }
  togglelanguage() {
    this.isShowlang = !this.isShowlang;
  }
  togglewhoweare(){
    this.isShowwhoweare = !this.isShowwhoweare;
	this.isShowwhatwedo = true;
	this.isShowweworkwith = true;
	this.isShowtechnologies = true;
  }
  togglewhatwedo(){
    this.isShowwhatwedo = !this.isShowwhatwedo;
	this.isShowwhoweare = true;
	this.isShowweworkwith = true;
	this.isShowtechnologies = true;
  }
  toggleweworkwith(){
    this.isShowweworkwith = !this.isShowweworkwith;
	this.isShowwhoweare = true;
	this.isShowwhatwedo = true;
	this.isShowtechnologies = true;
  }
  toggletechnologies(){
    this.isShowtechnologies = !this.isShowtechnologies;
	this.isShowwhoweare = true;
	this.isShowwhatwedo = true;
	this.isShowweworkwith = true;
  }
  country_element = 'Select';
  country_elementinput = '';
  country_select = false;
  service_select = false;
  countryonClick(e){
    this.country_select = !this.country_select;
    if(e.target.firstChild.innerHTML === undefined){
      this.country_element = e.target.innerHTML;
    }else{
      this.country_element = e.target.firstChild.innerHTML;
    }
    if(this.country_element != 'Select'){
      this.country_elementinput = this.country_element;
    }else{
      this.country_elementinput = '';
    }
  }

  //for contact us form services
  selectedItemsList = [];
  checkedIDs = [];

  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Mobile Application',
      isChecked: false
    },
    {
      id: 'C002',
      label: 'Web Development',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Cloud Computing',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'QA & Testing',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Internet of Things(IoT)',
      isChecked: false
    },
    {
      id: 'C005',
      label: 'Analytics and Big Data',
      isChecked: false
    },
    {
      id: 'C006',
      label: 'UX / UI Design',
      isChecked: false
    },
    {
      id: 'C007',
      label: 'Internet Marketing',
      isChecked: false
    },
    {
      id: 'C008',
      label: 'Software Consuting',
      isChecked: false
    },
    {
      id: 'C009',
      label: 'END-TO-END Product Engineering',
      isChecked: false
    },
    {
      id: 'C010',
      label: 'Enterprise Digital Transformation',
      isChecked: false
    },
    {
      id: 'C011',
      label: 'Team Augmentation',
      isChecked: false
    },
    {
      id: 'C012',
      label: 'AI & ML',
      isChecked: false
    },
    {
      id: 'C013',
      label: 'Blockchain',
      isChecked: false
    },
    {
      id: 'C014',
      label: 'DevOps',
      isChecked: false
    },
    {
      id: 'C015',
      label: 'SAP',
      isChecked: false
    }
  ];

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });

    console.log(this.selectedItemsList);
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }
  ngAfterViewInit(): void {
 this.elementPosition = this.menuElement.nativeElement.offsetHeight;
 // Wrap every letter in a span
let textWrapper = document.querySelector('.c2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");


let textWrapper1 = document.querySelector('.content1');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter1' style='display:inline-block;'>$&</span>");

let textWrappercontent = document.querySelector('.content2');
textWrappercontent.innerHTML = textWrappercontent.textContent.replace(/\S/g, "<span class='contentletter' style='display:inline-block;'>$&</span>");
let textWrappercontent3 = document.querySelector('.content3');
textWrappercontent3.innerHTML = textWrappercontent3.textContent.replace(/\S/g, "<span class='contentletter3' style='display:inline-block;'>$&</span>");
let textWrappercontent4 = document.querySelector('.content4');
textWrappercontent4.innerHTML = textWrappercontent4.textContent.replace(/\S/g, "<span class='contentletter4' style='display:inline-block;'>$&</span>");
anime.timeline({loop: false})
  .add({
    targets: '.c2 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 5000,
    delay: (el, i) => 500 + 30 * i
  });

anime.timeline({loop: false})
  .add({
    targets: '.content1 .letter1',
    translateX: [0,40],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 5000,
    delay: (el, i) => 1000 + 50 * i
  });
anime.timeline({loop: true})
.add({
    targets: '.content2 .contentletter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 1500 + 50 * i
  }).add({
    targets: '.content2 .contentletter',
    translateY: [0,-100],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 100,
    delay: (el, i) => 100 + 50 * i
  }).add({
    targets: '.content3 .contentletter3',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 100 + 50 * i
  }).add({
    targets: '.content3 .contentletter3',
    translateY: [0,-100],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 100,
    delay: (el, i) => 2000 + 50 * i
  }).add({
    targets: '.content4 .contentletter4',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 100 + 50 * i
  }).add({
    targets: '.content4 .contentletter4',
    translateY: [0,-100],
    translateZ: 0,
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 100,
    delay: (el, i) => 100 + 50 * i
  });

}
}
