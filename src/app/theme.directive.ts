import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective {

  constructor(private elRef:ElementRef)
  {
    //elRef hold reference of all elements/tag present in html template

    elRef.nativeElement.style.color='orange';
     
    elRef.nativeElement.style.fontSize='40px';


  }

}
