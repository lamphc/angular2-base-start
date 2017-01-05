import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { TodoModule } from './todo/todo.module';
import { HeroModule } from './hero/hero.module';

import './rxjs-extensions';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
    imports:        [BrowserModule, FormsModule, AppRoutingModule, TodoModule, HeroModule],
    declarations:   [AppComponent, AboutComponent],
    bootstrap:      [AppComponent]
})
export class AppModule {}