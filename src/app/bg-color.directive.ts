import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  // defaultColor: string = "red";
  // mouseOverColor: string = "green";
  // mouseLeaveColor: string = "blue";


  @Input() defaultColor: string = "red";
  @Input() mouseOverColor: string = "green";
  @Input() mouseLeaveColor: string = "blue";

  constructor() { }

  @HostBinding('style.backgroundColor') bgColor : string = "";
  //@HostBinding('style.background-color') bgColor: string = "";


  ngOnInit() {
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseover') onMouseOver() {
    this.bgColor = this.mouseOverColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = this.mouseLeaveColor;
  }


}
