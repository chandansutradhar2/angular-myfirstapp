import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstrom',
    rating: 10,
  };
  isLoggedIn: boolean = false;
  constructor() {
    setTimeout(() => {
      this.isLoggedIn = true;
    }, 7000);
  }

  ngOnInit(): void {}
}
