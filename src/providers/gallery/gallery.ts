//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import { map } from 'rxjs/operators';
/*
  Generated class for the GalleryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GalleryProvider {
  public host:string="https://pixabay.com/api/";
  constructor(public http: Http) {
    console.log('Hello GalleryProvider Provider');
  }
  chercher(query:string,size:number,page:number){
   return this.http.get(this.host+"?key=18243715-8fdc962fe9848f5c6eaf00f42&q="
                  +query+"&per_page="+size+"&page="+page)
    .pipe(map(resp=>resp.json()));
  }
}
