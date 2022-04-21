import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'npst-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  selectedHero: Hero;
  constructor() {
    this.selectedHero = {
      id: 22,
      name: 'SuperMan',
      rating: 5,
    };
  }

  ngOnInit(): void {}
}
