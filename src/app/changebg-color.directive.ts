import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangebgColor]'
})
export class ChangebgColorDirective {

  constructor() { }

  // @HostBinding('style.color') myColor:String = "red";

  // @HostBinding('style.border') myBorder:String = "5px solid green";

  // @HostBinding('style.backgroundColor') myBgColor:String = "yellow";


  //Using multiple class

  @HostBinding('class') cl = 'custc hcl';


  //HostListener

  @HostListener('click') onClick()
  {
    alert("Pop Up");
  }



}













