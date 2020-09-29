import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../model/place.model';

/**
 * Generated class for the DetailPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-place',
  templateUrl: 'detail-place.html',
})
export class DetailPlacePage {
  place:Place;
  photo:string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public camera:Camera,
    public alertCtrl:AlertController) {
    this.place=this.navParams.get('place');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPlacePage');
  }

  onTakePicture(){
    const option1:CameraOptions ={
      quality:50,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.CAMERA,
      allowEdit:true,
      targetHeight:240,
      targetWidth:320
    };
    const option2: CameraOptions ={
      quality:50,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit:true,
      targetHeight:240,
      targetWidth:320

    };
    let alert=this.alertCtrl.create({
      title:"Source",
      subTitle:"Quelle source ?",
      buttons:[
        {text:"Camera",handler: ()=>{this.takePicture(option1)}},
        {text:"Library",handler: ()=>{this.takePicture(option2)}}
      ]

    });
    alert.present();
    //this.camera.getPicture()
  }

  takePicture(options){
    this.camera.getPicture(options)
      .then(data=>{
        this.photo='data:image/jpeg;base64,'+data;
      })
      .catch(err=>{
        console.log(err);
      })
  }

}
