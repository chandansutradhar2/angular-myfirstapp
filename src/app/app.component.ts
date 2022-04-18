import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentDate!: string;

  constructor() {
    setInterval(() => {
      this.currentDate = new Date().toLocaleString();
    }, 1000);
  }

  showDateTime() {}
}
