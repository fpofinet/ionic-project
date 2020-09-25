//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../../model/place.model';
import { Storage } from '@ionic/storage';
/*
  Generated class for the PlaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlaceProvider {

  private places:Array<Place>=[
];
  constructor(public storage:Storage) {
    console.log('Hello PlaceProvider Provider');
  }

  addPlace(place:Place){
    
    this.places.push(place);
    this.storage.set('places',this.places);
  }

  getAllPlaces(){
    return this.storage.get('places').then(data=>{
      this.places=data!=null?data:[];
      return this.places;
    });
  }

}
