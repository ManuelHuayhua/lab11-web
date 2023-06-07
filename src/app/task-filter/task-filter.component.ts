import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();
  selectedFilter: string = '';

  applyFilter(event: Event) {
    this.selectedFilter = (event.target as HTMLSelectElement).value;
    if (this.selectedFilter === 'completadas') {
      this.filterChanged.emit(this.selectedFilter);
    }
  }
}