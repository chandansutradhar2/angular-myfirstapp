import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DemoComponent } from './demo/demo.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TestComponent } from './test/test.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, DemoComponent, TestComponent, HeroDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
