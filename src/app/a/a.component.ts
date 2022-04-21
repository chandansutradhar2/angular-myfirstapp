import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'npst-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent implements OnInit {
  constructor(public stateSvc: StateService) {}

  ngOnInit(): void {}
  showLogInStatus() {
    alert(this.stateSvc.isLoggedIn);
  }
}
