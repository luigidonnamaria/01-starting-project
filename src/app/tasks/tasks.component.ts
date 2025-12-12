import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskData } from './task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId?: string;

  constructor(private serviceTasks: TaskService) {}

  showForm: boolean = false;

  get selectedUserTasks() {
    return this.serviceTasks.getUserTasks(this.userId!);
  }

  onAddTask() {
    this.showForm = true;
  }

  onCancelForm() {
    this.showForm = false;
  }
}
