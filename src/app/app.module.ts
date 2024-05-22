import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AuthenticationService } from './services/authentication.service';
import { StateService } from './services/state.service';
import { TaskService } from './services/task.service';

import {AppHttpInterceptor} from './interceptors/appHttp.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    TaskComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
	StateService,
	TaskService,
	{
	  provide : HTTP_INTERCEPTORS,
	  useClass : AppHttpInterceptor,
	  multi : true
	}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
