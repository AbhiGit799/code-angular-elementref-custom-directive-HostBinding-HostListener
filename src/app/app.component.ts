import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,filter,map, mergeMap } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
  viewProviders: [], //viewProviders is for using class.
  encapsulation: ViewEncapsulation.None,

  providers: [], //Making service component level ; //21-March-2023
})


export class AppComponent {

  title="Angular Tutorial";

  constructor(private elRef:ElementRef)
  {
    //elRef hold reference of all elements/tag present in html template

    // elRef.nativeElement.style.color='red';
     
    // elRef.nativeElement.style.fontSize='40px';


  }

  isShow: boolean = true;
  showHide() {
    this.isShow =! this.isShow;
  }

  //Property Binding
  varorange = 'orange';
  varcyan = 'cyan';
  varpurple = 'darkcyan';
  
}




























