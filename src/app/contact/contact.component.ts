import { Component, AfterViewInit,OnInit, HostListener, Inject, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  formGroup;
  submitted = false;
  showMsg = false;
  @ViewChild(FormGroupDirective, {static: false}) formDirective: FormGroupDirective;
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
  isShowlang = true;	
  isShowleftmenu = false;
  toggleleftmenu(){
    this.isShowleftmenu = !this.isShowleftmenu;
  }
  togglelanguage() {
    this.isShowlang = !this.isShowlang;
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
}
