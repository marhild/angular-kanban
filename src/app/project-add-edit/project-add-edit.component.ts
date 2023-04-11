import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-add-edit',
  templateUrl: './project-add-edit.component.html',
  styleUrls: ['./project-add-edit.component.css']
})
export class ProjectAddEditComponent implements OnInit {

  projectForm: FormGroup;

  statusOptions: string[] = [
    'OPEN',
    'IN PROGRESS',
    'BACKLOG',
    'CLOSED'
  ]

  constructor(
    private _fb: FormBuilder, 
    private _dialogRef: MatDialogRef<ProjectAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.projectForm = this._fb.group({
      title: '',
      dateOfCompletion: '',
      status: '',
      description: '',
    })
  }

  ngOnInit(): void {}

  onFormSubmit() {}

}
