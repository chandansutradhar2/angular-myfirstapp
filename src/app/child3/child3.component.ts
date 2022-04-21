import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'npst-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'],
})
export class Child3Component implements OnInit {
  @Input() username?: string;
  @Input() loginStatus?: boolean;
  constructor() {}

  ngOnInit(): void {
    console.log(this.username);
  }
}
