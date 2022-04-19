import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentDate!: string;
  name: string = 'chandan';
  constructor() {
    setInterval(() => {
      this.currentDate = new Date().toLocaleString();
    }, 1000);
  }

  getCurrentUserName(): string {
    return 'Chandan Naresh';
  }

  showDateTime() {}
}
