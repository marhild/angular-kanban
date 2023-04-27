import { Component, Inject, OnInit} from '@angular/core';
import { ToastService } from '../services/toast.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.css']
})
export class TaskAddEditComponent implements OnInit{

  taskForm: FormGroup;

  statusOptions: string[] = [
    'OPEN',
    'IN PROGRESS',
    'BACKLOG',
    'CLOSED'
  ]

  constructor(
    private _fb: FormBuilder, 
    private _dialogRef: MatDialogRef<TaskAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _taskService: TaskService,
    private _toastService: ToastService,
  ) {
    this.taskForm = this._fb.group({
      projectId: data,
      title: '',
      dateOfCompletion: '',
      status: '',
      description: '',
    })
  }

  ngOnInit(): void {
    //this.taskForm.patchValue(this.projectId);
    console.log('inside dialog', this.data);
  }

  onFormSubmit() {
    if(this.taskForm.valid) {
      if(!this.data) {}
      else {
        this._taskService.addTask(this.taskForm.value)
          .subscribe({
            next: (val: any) => {
              this._dialogRef.close(true);
              this._toastService.openSnackBar('New Task added.');
            },
            error: console.log
          })
      }
    }
  }

}
