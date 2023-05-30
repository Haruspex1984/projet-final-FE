import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Cinema} from "../../../shared/models/Cinema";
import {HttpClient} from "@angular/common/http";
import {CinemaService} from "../../../shared/services/cinema/cinema.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit{

  cinemas? : Cinema[]


  constructor(private service : CinemaService,private route : Router) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next : value => {
        this.cinemas = value;
      },
      error : err => {
        this.route.navigate([""]).then()
      }
    })
  }





}
