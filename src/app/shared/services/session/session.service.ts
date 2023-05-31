import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private _http : HttpClient) { }

  getAllSessionsByCinema(cinemaId : number) : Observable<any>{
    return this._http.get(`http://localhost:8080/sessions/cinema/${cinemaId}/all`)
  }

  getAllSessionsByMovie(movieId : number) : Observable<any>{
    return this._http.get(`http://localhost:8080/sessions/movie/${movieId}/all`)
  }




}
