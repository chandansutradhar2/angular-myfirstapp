import { Injectable } from '@angular/core';

//This below is DI - dependency injection - design pattern in angular
@Injectable({
  providedIn: 'root',
})
//this will inject the service in root component (app-root)
export class StateService {
  isLoggedIn: boolean = false;
  constructor() {
    console.log('State Service initialized');
  }
}
