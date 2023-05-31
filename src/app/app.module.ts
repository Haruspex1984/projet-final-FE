import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './auth/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CinemasComponent } from './auth/cinemas/cinemas/cinemas.component';
import { MoviesComponent } from './auth/movies/movies.component';
import { HomeComponent } from './auth/home/home.component';
import { ProfileComponent } from './auth/profile/profile.component';
import {LoginService} from "./shared/services/login/login.service";
import {TokenInterceptor} from "./shared/interceptors/token.interceptor";
import {MatCardModule} from "@angular/material/card";
import { AdminComponent } from './auth/admin/admin.component';
import {MatStepperModule} from "@angular/material/stepper";
import { SuccessfulRegisterComponent } from './auth/successful-register/successful-register.component';
import { SessionComponent } from './auth/session/session.component';
import { SessionMovieComponent } from './auth/session-movie/session-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BannerComponent,
    RegisterComponent,
    CinemasComponent,
    MoviesComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    SuccessfulRegisterComponent,
    SessionComponent,
    SessionMovieComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatStepperModule

    ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
