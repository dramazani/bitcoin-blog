import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chan',
  templateUrl: './chan.component.html',
  styleUrls: ['./chan.component.css']
})
export class ChanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  hideMobileNav() {
    var x = document.getElementById("myTopnav");
    x.className = "topnav";
  }

  toggleMobileNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
}
