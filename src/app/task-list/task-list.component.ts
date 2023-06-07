import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnChanges {
  @Input() tasks: string[] = [];
  @Input() selectedFilter: string = '';
  taskStates: boolean[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedFilter'] && !changes['selectedFilter'].firstChange) {
      this.updateTaskStates();
    }
  }

  filterTasks(): string[] {
    if (this.selectedFilter === 'pendientes') {
      return this.tasks.filter((_, index) => !this.taskStates[index]);
    } else if (this.selectedFilter === 'completadas') {
      return this.tasks.filter((_, index) => this.taskStates[index]);
    } else {
      return this.tasks;
    }
  }

  handleTaskChange(event: any, index: number) {
    this.taskStates[index] = event.target.checked;
  }

  updateTaskStates() {
    this.taskStates = new Array(this.tasks.length).fill(false);
  }
}