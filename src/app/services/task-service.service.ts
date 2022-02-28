import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasks: Task[];

  constructor() {
     this.tasks = [];
   }

   getTask(){ //Obtener tareas de localstorage
     if(localStorage.getItem('tareas2')===null){
       return this.tasks;
     }
     else{
       this.tasks = JSON.parse(localStorage.getItem('tareas2')!);
       return this.tasks;
     }
   }

   addTask(task : Task){
     this.tasks.push(task);  //Agregar al arreglo en memoria RAM
     let tasks: Task[] = [];
     if(localStorage.getItem('tareas2') === null){
       tasks.push(task); //En el arreglo
       localStorage.setItem('tareas2', JSON.stringify(tasks)); //Guarda en localstorage
     }else{
      tasks = JSON.parse(localStorage.getItem('tareas2')!);
      tasks.push(task); //En el arreglo
      localStorage.setItem('tareas2', JSON.stringify(tasks));
     }
   }

   deleteTask(task: Task){
     for (let i = 0; i < this.tasks.length; i++) {
        if(task == this.tasks[i]){
          this.tasks.splice(i,1); //Elimina del arreglo
          localStorage.setItem('tareas',JSON.stringify(this.tasks));
        }
     }
   }






}
