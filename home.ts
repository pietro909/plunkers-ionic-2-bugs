import { NavController } from 'ionic-angular/index';
import { Page1 } from 'page1.ts'
import { Component } from "@angular/core";


@Component({
  templateUrl:"home.html"
})
export class HomePage {
  
  greeting: string;
  
  constructor(private nav: NavController) {
		
	}
	
	goToPage1() {
	  this.nav.push(Page1);
	}


}