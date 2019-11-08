import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class productService {
  private_albumUrl='../asset/album.json';
  constructor(private_http: Http) { }


  getAlbum(id: number){
    return this._http.get(this._albumUrl).map((response)=>response.json());

  }
}
