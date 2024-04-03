import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  tasks: any[] = [];

  // constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      (response: any) => {
        this.tasks = response;
      },
      (error: any) => {
        console.log('Error fetching tasks:', error);
      }
    );
  }

  markTaskComplete(task: any) {
    // Logic to mark the task as complete
  }

  editTask(task: any) {
    // Logic to edit the task
  }

  deleteTask(task: any) {
    // Logic to delete the task
  }
}