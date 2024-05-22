import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { StateService } from '../../services/state.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task!: Task;
  errorMessage!: string;
   
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private taskService: TaskService, private stateService: StateService) { }
  
   ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.getTask(id);
  }
  
  handleBack() {
	this.stateService.setTaskState({
		task: undefined,
    });
	this.router.navigateByUrl('/tasks');
  }
  
   async getTask(id: string){
    try {
		this.task = await this.taskService.getTask(id) as Task;
		
		this.stateService.setTaskState({
            task: this.task,
			status: 'OK',
			errorMessage: undefined
          });
		  
	} catch(error) {
	     this.stateService.setTaskState({
            task: undefined,
			status: 'ERROR',
            errorMessage :error
          });
	}
  }
  

}
