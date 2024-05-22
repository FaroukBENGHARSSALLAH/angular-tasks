import { Component } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  links: Array<any> = [
    { title: "Tasks", route: "/tasks", icon: "search" },
    { title:"Task", route: "/task/:id", icon: "safe" }
  ];
  
  currentLink: any;

  constructor(public stateService: StateService, private router : Router) {
  }

  setCurrentLink(link: any) {
    this.currentLink = link;
  }

  logout() {
    this.stateService.setAuthenticationState({});
	this.stateService.setAuthenticationState({
		isAuthenticated : false,
		username: null,
		roles: null,
		token: null
	});
	sessionStorage.removeItem("access_token");
	localStorage.removeItem("access_token");
    this.router.navigateByUrl("/");
  }
}