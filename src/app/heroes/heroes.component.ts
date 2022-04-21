import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mockup/mock-heroes';
import { Hero } from '../models/hero.model';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  //password-condition: 1-4 weak-> red, 5-8 ->medium ->orange, 9-15 ->strong->green

  selectedHero!: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstrom',
    rating: 10,
  };
  password: string = '';
  heroes = HEROES;

  constructor() {}

  ngOnInit(): void {
    this.heroes.forEach((hero) => {
      console.log('', hero.id, hero.name, hero.rating);
    });
  }

  print() {
    console.log(this.hero);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  onChange(changeNameEvent: any, idx: number) {
    // console.log(ev.target.value, idx);
    this.heroes[idx].name = changeNameEvent.target.value;
    // let result = this.heroes.findIndex((hero) => {
    //   return hero.id == id;
    // });

    //result !== -1 ? (this.heroes[result].name = ev.target.value) : null;
  }
}
