import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User";
import {BehaviorSubject, Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private isAdminSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  //
  // get isAdmin$(): Observable<boolean> {
  //   return this.isAdminSubject.asObservable();
  // }
  // private _isAdmin : boolean = false;
  // user : User | undefined

  // setRole(username : string | null){
  //   this.getUser(username).subscribe({next : value => {
  //     this.user = value;
  //     }})
  //   if(this.user){
  //     const roles : string[] = this.user.roles;
  //     if(roles.includes("ADMIN")){
  //       this.isAdminSubject.next(true);
  //       console.log(this._isAdmin)
  //     }
  //   }
  // }

  // constructor(private http : HttpClient) {
  // }

  // getUser(username: string | null) : Observable<any>{
  //   return this.http.get(`http://localhost:8080/user/${username}`);
  // }

}


