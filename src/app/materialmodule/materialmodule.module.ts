import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const matmodule=[
  MatSlideToggleModule, //<---Commenting and moving code to material module
  MatCheckboxModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matmodule
  ],
  exports:[
    matmodule
  ]
})
export class MaterialmoduleModule { }
