import { Component, OnInit } from '@angular/core';
const test = '';

@Component({
  selector: 'app-button',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {
  constructor() {
    console.log('demo component initialized');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log('demo after initialization');
  }
}
