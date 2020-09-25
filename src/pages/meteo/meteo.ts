import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  meteo:any; 
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http:Http,
              public loadCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }
  onGetMeteo(dataForm){
    let load=this.loadCtrl.create({
      content:"chargement des données..."
    });
    load.present();
    this.http.get("http://api.openweathermap.org/data/2.5/forecast?q="
    +dataForm.ville+"&APPID=7f29bc78d2857d2030c08ba468cc09f1")
    .map(resp=>resp.json())
    .subscribe(data=>{
      this.meteo=data;
      load.dismiss();

    },err=>{
        console.log(err);
        load.dismiss();
    });

  }
}
