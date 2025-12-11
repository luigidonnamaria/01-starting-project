import { Component, EventEmitter, Input, Output} from '@angular/core';
import { type Task} from '../task.model';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task !: Task;
  @Output() delete = new EventEmitter<string>();

  onDeleteSelectedTask() {
    this.delete.emit(this.task.id);
}

}
