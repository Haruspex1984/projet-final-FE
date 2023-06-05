import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {LoginForm} from "../../forms/loginForm";
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User";
import {RegisterForm} from "../../forms/RegisterForm";
import {env} from "../../../../env";



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _isAdmin: boolean = false;
  private currentUser : User | undefined;
  private isUserLogged : boolean = false;
  private userSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

  private readonly BASE_URL = `http://${env.server_host}:8080`



  constructor(private http: HttpClient) {
  }

  logout(){
    this.userSubject.next(undefined)
    this.userSubject.subscribe(currentUser =>{
      this.currentUser = currentUser;
    })
    this.isUserLoggedIn.next(false);
    localStorage.removeItem('token');
  }






  get isAdmin$(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
  }

  get user$(): Observable<User | undefined> {
    return this.userSubject.asObservable();
  }

  getUserStatus(): Observable<boolean> {
    return this.isUserLoggedIn.asObservable();
  }

  setLoggedInStatus() {
    if (localStorage.getItem('token')) {
      this.isUserLoggedIn.next(true);
    }
    this.isUserLoggedIn.subscribe(status => {
      this.isUserLogged = status;
    })
  }


  login(loginForm: LoginForm): Observable<any> {
    return this.http.post(this.BASE_URL+"/auth/login", loginForm);
  }

  register(registerForm : RegisterForm) : Observable<any>{
    return this.http.post(this.BASE_URL+"/auth/register",registerForm)
  }


  setRole(username: string | null) {
    this.getUser(username).subscribe({
      next: value => {
        this.userSubject.next(value);
        this.userSubject.subscribe(currentUser => {
          this.currentUser = currentUser;
        })
      }
    });

    this.userSubject.subscribe(user => {
      if (user) {
        const roles: string[] = user.roles;
        if (roles.includes("ADMIN")) {
          this.isAdminSubject.next(true);
          this.isAdminSubject.subscribe(isAdmin => {
            this._isAdmin = isAdmin;
          });
        }
      }
    });
  }

  getUser(username: string | null): Observable<any> {
      return this.http.get(this.BASE_URL+`/user/${username}`);

  }
}
