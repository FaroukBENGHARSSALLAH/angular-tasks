import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }
  
  public getTasks(): Promise<Array<Task>>{
     return new Promise((resolve, reject) => {
	     let tasks: Array<Task> = [
			{
				id: '45sdfghA-fdfsf578fdgfd-45sdfghA-fdfsf578fdgfd',
		        title:'task 1',
		        description: 'task 1 description'
			},
			{
			    id: '76ght5JHg-fdfsf578fdgfd-45sdfghA-fdfsf578fdgfd',
		        title:'task 2',
		        description: 'task 2 description'
			}
		 ];
		resolve(tasks);
	});
  }
  
  public getTask(id: string): Promise<Task>{
    return new Promise((resolve, reject) => {
		let tasks: Task = 
				{
					id: id,
					title:'task 1',
					description: 'task 1 description'
				};
			resolve(tasks);
		});		
  }
  
}
