import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Hero Angular App';
  constructor() {}

  getCurrentUserName(): string {
    return 'Chandan Naresh';
  }

  showDateTime() {}

  fun1() {
    return new Observable((obs) => {
      setInterval(() => {
        console.log('inside fun1');
        obs.next('new msg recieved');
      }, 2200);
    });
    // return new Promise((resolve, reject) => {
    //   //let timeValue = Math.floor(Math.random()*1000);
    //
    // });
  }

  caller() {
    // this.fun1().then((msg) => {
    //   console.log('new event :', msg);
    // });
    this.fun1().subscribe((msg) => {
      console.log('new event :', msg);
    });
  }
}
