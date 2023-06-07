import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = [];
  filteredTasks: string[] = [];
  selectedFilter: string = '';

  addTask(task: string) {
    this.tasks.push(task);
    this.filterTasks();
  }

  filterTasks() {
    if (this.selectedFilter === 'pendientes') {
      this.filteredTasks = this.tasks.filter(task => !this.isTaskCompleted(task));
    } else if (this.selectedFilter === 'completadas') {
      this.filteredTasks = this.tasks.filter(task => this.isTaskCompleted(task));
    } else {
      this.filteredTasks = this.tasks;
    }
  }

isTaskCompleted(task: string): boolean {
  return task.includes('completado');
}
}
