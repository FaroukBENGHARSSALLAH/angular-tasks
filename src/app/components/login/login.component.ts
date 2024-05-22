import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { AuthenticationRequest } from "../../models/authenticationRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }
  
  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: this.formBuilder.control(""),
      password: this.formBuilder.control(""),
	  rememberMe: this.formBuilder.control("")
    })
  }

  async handleLogin() {
	let authenticationRequest: AuthenticationRequest = {
		username: this.formLogin.value.username,
		password: this.formLogin.value.password,
		rememberMe: (this.formLogin.value.rememberMe) ? this.formLogin.value.rememberMe : false
	};
	
	try {
		let isAuthenticated = await this.authenticationService.login(authenticationRequest);
		if(isAuthenticated) {
		  this.router.navigateByUrl("/tasks");
		}
	} catch(error) {
	    this.errorMessage = error;
	}
  }
}