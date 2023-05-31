import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {AppComponent} from "./app.component";
import {RegisterComponent} from "./auth/register/register.component";
import {CinemasComponent} from "./auth/cinemas/cinemas/cinemas.component";
import {MoviesComponent} from "./auth/movies/movies.component";
import {HomeComponent} from "./auth/home/home.component";
import {ProfileComponent} from "./auth/profile/profile.component";
import {AuthGuard} from "./shared/services/auth.guard";
import {UsernameGuard} from "./shared/services/username.guard";
import {UserResolver} from "./shared/services/resolvers/user.resolver";
import {AdminComponent} from "./auth/admin/admin.component";
import {SuccessfulRegisterComponent} from "./auth/successful-register/successful-register.component";
import {SessionComponent} from "./auth/session/session.component";
import {SessionMovieComponent} from "./auth/session-movie/session-movie.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'success',component:SuccessfulRegisterComponent},
  {path:'profile/:username',component:ProfileComponent,resolve:[UserResolver],canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'cinemas',component:CinemasComponent},
  {path:'movies',component:MoviesComponent},
  {path:'session/cinema/:cinemaId',component:SessionComponent},
  {path:'session/movie/:movieId',component:SessionMovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
