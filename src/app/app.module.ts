import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LangueComponent } from './pages/langue/langue.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursComponent } from './pages/cours/cours.component';
import {MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OnecourComponent } from './pages/onecour/onecour.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LangueComponent,
    HomeComponent,
    CoursComponent,
    OnecourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
