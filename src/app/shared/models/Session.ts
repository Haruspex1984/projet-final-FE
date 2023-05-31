import {Movie} from "./Movie";
import {Cinema} from "./Cinema";

export interface Session{
  dateTime : Date,
  movieDTO : Movie,
  roomNumber : number,
  cinemaDTO : Cinema,
  remainingSeats : number
}
