import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(public stateService: StateService, private router: Router, ) {
	}
	
	ngOnInit(): void {
       this.refreshInternalState();
    }
	
	refreshInternalState() {
	  let token = sessionStorage.getItem("access_token");
	  if(token) {
	    this.setInternalState(token);
	  } else {
	    token = localStorage.getItem("access_token");
		if(token) {
	        this.setInternalState(token);
	    }
	  }
	}
	
	setInternalState(token: string) {
	    let decodedJwt: any = jwtDecode(token);
		this.stateService.setAuthenticationState({
			isAuthenticated : true,
			username: decodedJwt.sub,
			roles: decodedJwt.scopes,
			token: token
		});
	}
}
