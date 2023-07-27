import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyngIf]'
})
export class MyngIfDirective {

  constructor(private _templeteRef: TemplateRef<any>, private _viewContainerRef: ViewContainerRef) { }

  @Input() appMyngIf: boolean;
  ngOnChanges() {
    // console.log(this.appMyngIf);
    if (this.appMyngIf) {
      this._viewContainerRef.createEmbeddedView(this._templeteRef);
    } else {
      this._viewContainerRef.clear();
    }
  }


  // @Input() set appMyngIfT(val: boolean) {
  //   if (val) {
  //     this._viewContainerRef.createEmbeddedView(this._templeteRef);
  //   } else {
  //     this._viewContainerRef.clear();
  //   }
  // }



}
