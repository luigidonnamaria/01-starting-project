import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_TASKS } from './tasks/dummy-tasks';

interface Task {
    id: string,
    userId: string,
    title: string,
    summary: string,
    dueDate: string,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUser?: string;
  selectedTasks?: Task[] = [];

  onSelectUser(id: string) {
    this.selectedUser = this.users.find(user => user.id === id)?.name;
    this.selectedTasks = DUMMY_TASKS.filter(task => task.userId === id);
}
}
