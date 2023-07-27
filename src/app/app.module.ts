import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MaterialmoduleModule } from './materialmodule/materialmodule.module';
import { ThemeDirective } from './theme.directive';
import { MyngIfDirective } from './myng-if.directive';
import { ChangebgColorDirective } from './changebg-color.directive';
import { BgColorDirective } from './bg-color.directive';



@NgModule({
  declarations: [AppComponent, ThemeDirective, MyngIfDirective, ChangebgColorDirective, BgColorDirective],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
 //   HttpClientInMemoryWebApiModule.forRoot(Testdata),

 MaterialmoduleModule, //<-------Different ways to improve performance.

 // MatSlideToggleModule, //<---Commenting and moving code to material module
 // MatCheckboxModule

  ],
  providers:[], //example for showing nesting service example.
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
   
  }
}
