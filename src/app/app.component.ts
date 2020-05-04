import { Component } from '@angular/core';
import { ToDo } from './interfaces/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Daily Task List';
  task:string = '';
  taskId:number = 5;
  taskEdit:string = '';
  taskSearch:string = '';
  taskArrayCache:ToDo[];

  taskArray:ToDo[] = [
    {
      taskId: 1,
      task: 'Make bed', 
      editing: false,
      completed: true
    },
    {
      taskId: 2,
      task:'Dishes', 
      editing: false,
      completed: false
    },
    {
      taskId: 3,
      task:'Laundry', 
      editing: false,
      completed: false
    },
    {
      taskId: 4,
      task:'Scoop litter box', 
      editing: false,
      completed: false
    },
  ]

  addTask = function(){
    
    this.taskArray.push({
      taskId:this.taskId,
      task:this.task, 
      completed: false})

      this.task='';
      this.taskId++;
  }

  completeTask = function():boolean{
    return true;
  }

  removeTask = function(index:number):void{
    this.taskArray.splice(index, 1)
  }

  editingTask = function():boolean{
    return true;
  }

  editTask = function(t:ToDo){
    t.task = this.taskEdit;
    this.taskEdit = '';
  }

  cancelEditTask = function():boolean{
    this.taskEdit = '';
    return false;
  }

  remainingTasks = function():number{
      return this.taskArray.filter((tasks: { completed: any; }) => !tasks.completed).length;
  }

  searchTask = function(search:string):boolean{
    return search.toLowerCase().includes(this.taskSearch.toLowerCase());
  }

  atLeastOneCompleted = function():boolean{
    return this.taskArray.filter((tasks: { completed: any; }) => tasks.completed).length > 0;
  }

  clearCompleted = function():void{
    this.taskArray = this.taskArray.filter((tasks: { completed: any; }) => !tasks.completed);
  }
}
