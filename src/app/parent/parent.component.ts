import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'npst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  userName: string = 'Kate Winslet';
  isLoggedIn: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  handler(status: boolean) {
    console.log(status);
    this.isLoggedIn = status;
  }
}
