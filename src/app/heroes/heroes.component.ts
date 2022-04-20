import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  a: string = '';
  isLoggedIn: boolean = false;
  constructor() {
    setTimeout(() => {
      this.isLoggedIn = true;
    }, 7000);
  }

  ngOnInit(): void {}
}
