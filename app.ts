import { Component } from "@angular/core";
import { ionicBootstrap, Platform } from 'ionic-angular/index';
import { HomePage } from './home.ts';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  constructor(private platform: Platform) {
    this.rootPage = HomePage;
  }
}

ionicBootstrap(MyApp);