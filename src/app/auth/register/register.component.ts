import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../shared/services/login/login.service";
import {RegisterForm} from "../../shared/forms/RegisterForm";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  errorMessage? : string

  constructor(private formBuilder : FormBuilder,private service : LoginService, private router : Router) {
  }

  firstFormGroup : FormGroup = this.formBuilder.group(
    {username: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]]}
  );

  secondFormGroup : FormGroup = this.formBuilder.group(
    {password : ['',[Validators.required,Validators.pattern("^([a-zA-Z0-9@*#_!]{8,15})$")]]}
  )

  thirdFormGroup : FormGroup = this.formBuilder.group(
    {firstname : ['',[Validators.required,Validators.minLength(3)]]}
  )

  fourthFormGroup : FormGroup = this.formBuilder.group(
    {lastname : ['',[Validators.required,Validators.minLength(3)]]}
  )

  fifthFormGroup : FormGroup = this.formBuilder.group(
    {phoneNumber : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]}
  )

  sixthFormGroup : FormGroup = this.formBuilder.group(
    {email : ['',Validators.required]}
  )

  submit(){
    let formUsername = this.firstFormGroup.value.username;
    let formPassword = this.secondFormGroup.value.password;
    let formFirstname = this.thirdFormGroup.value.firstname;
    let formLastname = this.fourthFormGroup.value.lastname;
    let formPhoneNumber = this.fifthFormGroup.value.phoneNumber;
    let formEmail = this.sixthFormGroup.value.email;


    let newRegisterForm : RegisterForm = {
      username : formUsername,
      password : formPassword,
      firstname : formFirstname,
      lastname : formLastname,
      phoneNumber : formPhoneNumber,
      email : formEmail
    }

    console.log(JSON.stringify(newRegisterForm))

    this.service.register(newRegisterForm).subscribe({
      next : (response : any) => {
        this.router.navigate(['success']).then()
      },
      error : (err : any) =>{
        this.errorMessage = err.error;
      }
    })
  }







}
