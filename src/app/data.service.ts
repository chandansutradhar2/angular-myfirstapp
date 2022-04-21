import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getAllHero(): Promise<Hero[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('http://localhost:3000/api/heroes/all').subscribe(
        (result: any) => {
          if (result.length > 0) {
            resolve(result as Hero[]);
          }
        },
        (err) => {
          reject('unable to fetch data');
        }
      );
    });
  }

  addHero() {}
}
