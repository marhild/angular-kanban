import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ProjectAddEditComponent} from './project-add-edit/project-add-edit.component';
import {ProjectsService} from './services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  projectList: any;

  constructor(
    private _dialog: MatDialog,
    private _projectService: ProjectsService,
    ) {}

  ngOnInit(): void {
    this.projectList = this.getProjectList();
  }

  openProjectAddEditForm(){
    const dialogRef = this._dialog.open(ProjectAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.projectList = this.getProjectList();
        }
      }
    })
  }

  getProjectList(){
    this._projectService.getProjectList().subscribe({
      next: (res) => {
        this.projectList = res;
      },
      error: console.log
    })
  }
}
