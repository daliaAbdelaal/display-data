import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnteryService {

  constructor(private _HttpClient:HttpClient) { }
  getEntery():Observable<any>
  {
    return this._HttpClient.get('https://pokeapi.co/api/v2/pokedex/1/')
  }
}
