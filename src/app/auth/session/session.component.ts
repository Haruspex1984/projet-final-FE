import {Component, OnInit} from '@angular/core';
import {Session} from "../../shared/models/Session";
import {SessionService} from "../../shared/services/session/session.service";
import {ActivatedRoute} from "@angular/router";
import {Cinema} from "../../shared/models/Cinema";
import {CinemaService} from "../../shared/services/cinema/cinema.service";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit{

  constructor(private service: SessionService, private router: ActivatedRoute,private cinemaService : CinemaService) {
  }

  sessions?: Session[]
  cinema? : Cinema
  cinemaId : number = 0;

  getCinemaId(){
    this.cinemaId = this.router.snapshot.params['cinemaId'];
  }

  ngOnInit(): void {
    this.getCinemaId()
    this.service.getAllSessionsByCinema(this.cinemaId).subscribe({
      next: value => {
        this.sessions = value;
      }
    })
    this.cinemaService.getOne(this.cinemaId).subscribe({
      next : value => {
        this.cinema = value;
      }
    })

  }


}
