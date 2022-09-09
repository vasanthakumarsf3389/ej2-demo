import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { AngularSplitModule } from 'angular-split';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AngularSplitModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    GridAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
