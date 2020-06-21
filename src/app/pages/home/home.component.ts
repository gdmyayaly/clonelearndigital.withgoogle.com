import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public play=true;
  constructor() { }

  ngOnInit() {
   
  }
  playe(){
    if (this.play=true) {
      this.play=false;
    }
    setTimeout(() => {
      $('#myVideo').trigger('play'); 
    }, 1000);
  }
  fin(){
    this.play=true
  }
}
