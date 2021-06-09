import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "String Inspector!"
  constructor() { }

  ngOnInit(): void {
  }

  refresh() {
    console.log("refreshaa dataa")
  }

}