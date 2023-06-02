import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../shared/services/movie/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Session} from "../../shared/models/Session";
import {SessionService} from "../../shared/services/session/session.service";
import {Movie} from "../../shared/models/Movie";

@Component({
  selector: 'app-session-movie',
  templateUrl: './session-movie.component.html',
  styleUrls: ['./session-movie.component.css']
})
export class SessionMovieComponent implements OnInit{

  sessions? : Session[]
  movieId : number = 0;

  movie? : Movie


  constructor(private service : SessionService, private route : ActivatedRoute,private movieService : MovieService) {
  }

  getMovieId(){
    this.movieId = this.route.snapshot.params['movieId']
  }

  ngOnInit(): void {
    this.getMovieId()
    this.service.getAllSessionsByMovie(this.movieId).subscribe({
      next : value => {
        this.sessions = value;
      }
    })
    this.movieService.getOne(this.movieId).subscribe({
      next : value => {
        this.movie = value;
      }
    })


  }






}
