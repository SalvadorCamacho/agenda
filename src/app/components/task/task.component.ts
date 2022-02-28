import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

 @Input() task: Task;

  constructor(public taskService: TaskServiceService) {
    this.task = {
      title: '',
      description: '',
      hide: true
    }
  }
  ngOnInit(): void {
  }
  
   deleteTask(task: Task){
     if(confirm('¿Confirmar eliminar registro?')){
         this.taskService.deleteTask(task);
     }
  }
}
