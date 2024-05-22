import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public taskState: any = {
    tasks: [],
    task!: undefined,
	status: '',
    errorMessage!: undefined
  }

  public authenticationState: any = {
    isAuthenticated : false,
    username : undefined,
    roles : undefined,
    token : undefined
  }
  
  constructor() { }

  public setTaskState(state: any): void {
    this.taskState = {
	...this.taskState,
	...state
	};
  }
  
  public setAuthenticationState(state: any): void{
    this.authenticationState = {
	...this.authenticationState,
	...state
	};
  }
  

}
