import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { StateService } from './state.service';
import { AuthenticationRequest } from '../models/authenticationRequest';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private stateService: StateService) { }
  
  public async login(authenticationRequest: AuthenticationRequest){
	return new Promise((resolve, reject) => {
                    if(authenticationRequest.username == 'admin') {
					    let token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzZWN1cml0eS1jZW50ZXItc2lnbmVkIiwic3ViIjoiYWRtaW4iLCJzY29wZXMiOiJST0xFX2FkbWluIiwiZXhwIjoxNzE1Nzg0NTUzLCJpYXQiOjE3MTU3ODQyNTN9.bog2mtOekZtEwbRXHk5FQyN-FY7DEWHM9wiQtWuLPtw';
						let decodedJwt: any = jwtDecode(token);
						this.stateService.setAuthenticationState({
							isAuthenticated : true,
							username: decodedJwt.sub,
							roles: decodedJwt.scopes,
							token: response.body.access_token
						});
						if(authenticationRequest.rememberMe) {
							sessionStorage.setItem("access_token", response.body.access_token);
						} else {
							localStorage.setItem("access_token", response.body.access_token)
						}
						resolve(true);
					} else {
						if(authenticationRequest.username == '500') {
							reject('Server is unavailable, Please try later')
						}
						else if(authenticationRequest.username == '401' || authenticationRequest.username == '403') {
							reject('Invalid username, Please verify your credentials tokens')
						} else {
						    reject('Unexpected received error, Please try later');
						}
					}			
    });	
  }
}
