import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { StateService } from '../../services/state.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Array<Task> = [];
  errorMessage!: string;
   
  constructor(private router: Router, private taskService: TaskService, private stateService: StateService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  
  handleSearchTask(id: string) {
	this.router.navigateByUrl("/task/"+id);
  }
  
  async getTasks(){
    try {
		this.tasks = await this.taskService.getTasks() as Array<Task>;
		
		this.stateService.setTaskState({
			tasks: this.tasks,
            task: undefined,
			status: 'OK',
			errorMessage: undefined
        });
		  
	} catch(error) {
	    this.errorMessage = error;
		
		this.stateService.setTaskState({
            tasks: [],
            task: undefined,
			status: 'ERROR',
            errorMessage: error
        });
	}
  }

}
