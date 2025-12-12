import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from './dummy-tasks';
import { TaskData } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: TaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getDate().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });

    this.saveData();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveData();
  }

  saveData() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
