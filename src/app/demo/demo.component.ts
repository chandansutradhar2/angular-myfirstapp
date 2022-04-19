import { Component } from '@angular/core';
const test = '';

@Component({
  selector: 'app-demo',
  template: `<h2>Demo Component</h2>`,
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  constructor() {
    console.log('demo component initialized');
  }
}
