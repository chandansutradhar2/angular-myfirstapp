import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'npst-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {
  @Input() sessionValid?: boolean;
  @Output() loginStatus: EventEmitter<boolean> = new EventEmitter();
  constructor(private stateSvc: StateService) {
    console.log('child 1 initialized');
  }

  ngOnInit(): void {}

  onLoginClick() {
    //child emitting event to parent
    this.loginStatus.emit(true);
    this.stateSvc.isLoggedIn = true;
  }

  onLogoutClick() {
    this.loginStatus.emit(false);
    this.stateSvc.isLoggedIn = false;
  }
}
