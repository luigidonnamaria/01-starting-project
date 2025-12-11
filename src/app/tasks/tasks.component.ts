import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) name ?:string;
  @Input({required:true}) userId ?: string;
  

  userTasks = DUMMY_TASKS;
  showForm : boolean= false;

  get selectedUserTasks (){

    return this.userTasks.filter((task)=> task.userId === this.userId) 
  }

  onDeleteTask(taskId: string) {

    this.userTasks = this.userTasks.filter((task)=> task.id !== taskId)

}
  onAddTask() {
    this.showForm= true;
    
}

onCancelForm(val: boolean) {
   this.showForm= val;
}
}
