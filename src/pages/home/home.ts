import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    contact={
        name : 'anna',
        email : 'anna@test.domaine',
        photo : 'assets/imgs/im.jpg'
        
    }

  constructor(public navCtrl: NavController) {

  }

}
