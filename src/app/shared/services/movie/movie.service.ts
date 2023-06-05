import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {env} from "../../../../env";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly BASE_URL = `http://${env.server_host}:8080`
  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.BASE_URL+"/movies/all")
  }

  getOne(movieId : number): Observable<any>{
    return this.http.get(this.BASE_URL+`/movies/${movieId}`)
  }




}
