import { Type } from './../../type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { TYPES } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  getTypes() : Observable<Type[]>{
    return of(TYPES);
  }
}
