import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacesPage } from '../pages/places/places';
import { MeteoPage } from '../pages/meteo/meteo';
import { GalleryPage } from '../pages/gallery/gallery';
import { GalleryProvider } from '../providers/gallery/gallery';
import { DetailImagePage } from '../pages/detail-image/detail-image';
import { MeteoProvider } from '../providers/meteo/meteo';
import { PlaceProvider } from '../providers/place/place';
import { NewPlacePage } from '../pages/new-place/new-place';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { DetailPlacePage } from '../pages/detail-place/detail-place';
//import { AgmCoreModule } from '@agm/core/core.module';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MeteoPage,
    PlacesPage,
    GalleryPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__PlacesDatabase',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJ6k7qZ2EXK_K7dYDvhnHM0DjQJ0YtjBc'
    })*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MeteoPage,
    PlacesPage,
    GalleryPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GalleryProvider,
    MeteoProvider,
    PlaceProvider,
    Geolocation
  ]
})
export class AppModule {}
