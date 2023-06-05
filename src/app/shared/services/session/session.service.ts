import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {env} from "../../../../env";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private _http : HttpClient) { }

  private readonly BASE_URL = `http://${env.server_host}:8080`

  getAllSessionsByCinema(cinemaId : number) : Observable<any>{
    return this._http.get(this.BASE_URL+`/sessions/cinema/${cinemaId}/all`)
  }

  getAllSessionsByMovie(movieId : number) : Observable<any>{
    return this._http.get(this.BASE_URL+`/sessions/movie/${movieId}/all`)
  }




}
