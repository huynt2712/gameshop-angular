import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header-upper-top',
  templateUrl: './header-upper-top.component.html',
  styleUrls: ['./header-upper-top.component.css']
})
export class HeaderUpperTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $(".burger-nav").on("click", function () {
        $(".header-menu ul").toggleClass("open");
      });
    });
  }
  
}
