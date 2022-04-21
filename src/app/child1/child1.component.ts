import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'npst-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {
  @Input() sessionValid?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
