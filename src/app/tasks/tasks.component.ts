import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
interface Task {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) name ?:string;
  @Input({required:true}) tasks ?: Task[];
}
