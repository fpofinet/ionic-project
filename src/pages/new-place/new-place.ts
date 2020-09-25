import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { PlaceProvider } from '../../providers/place/place';

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public placeService:PlaceProvider,
                public geolocation:Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }
  onAddPlace(place:Place){
    place.location={
      longitude:0,latitude:0
    };
    place.timestamp=new Date().getTime();
    this.geolocation.getCurrentPosition().then(position=>{
      place.location.latitude=position.coords.latitude;
      place.location.longitude=position.coords.longitude;
      this.placeService.addPlace(place);
      this.navCtrl.pop();
    })
     /*this.geolocation.getCurrentPosition(position=>{
      place.location.latitude=position.coords.latitude;
      place.location.longitude=position.coords.longitude;
      this.placeService.addPlace(place);
      this.navCtrl.pop();
    });*/
    /*.catch(err=>{
      place.location.latitude=0;
      place.location.longitude=0;
      this.placeService.addPlace(place);
      this.navCtrl.pop();
      console.log("erreur location"+err);
    });*/

    
    
  }
}
