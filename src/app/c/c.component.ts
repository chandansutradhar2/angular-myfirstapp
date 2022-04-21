import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'npst-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
})
export class CComponent implements OnInit {
  constructor(private stateSvc: StateService) {
    console.log('c component init');
  }

  ngOnInit(): void {}

  showLogInStatus() {
    alert(this.stateSvc.isLoggedIn);
  }
}
