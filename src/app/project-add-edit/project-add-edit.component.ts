import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ProjectsService} from '../services/projects.service';
import { ToastService } from '../services/toast.service';

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
    private _projectService: ProjectsService,
    private _toastService: ToastService,
  ) {
    this.projectForm = this._fb.group({
      title: '',
      dateOfCompletion: '',
      status: '',
      description: '',
    })
  }

  ngOnInit(): void {}

  onFormSubmit() {
    this._projectService.addProject(this.projectForm.value).subscribe({
      next: (val:any) => {
        this._dialogRef.close(true);
        this._toastService.openSnackBar('New Project added.');
      },
      error: console.log
    })
  }

}
