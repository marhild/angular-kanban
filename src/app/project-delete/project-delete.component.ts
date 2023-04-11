import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _projectService: ProjectsService
  ) {
  }

  deleteProject() {
    this._projectService.deleteProject(this.data).subscribe({
      next: (res) => {},
      error: console.log
    })
  }
}
