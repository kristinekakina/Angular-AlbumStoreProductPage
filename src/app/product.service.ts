import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class productService {
  private _album="../asset/album.json";
  constructor(private _http: Http) {}
  getAlbum(id: number){
    return this._http(this._album).map((response)=>response.json());
  }
}
   