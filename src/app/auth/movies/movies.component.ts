import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../shared/services/movie/movie.service";
import {Movie} from "../../shared/models/Movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  movies? : Movie[]
  errorMessage? : string

  constructor(private service : MovieService) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next : value => {
        this.movies = value;
      },
      error : err => {
        this.errorMessage = "ERREUR"
      }
    })
  }




}
