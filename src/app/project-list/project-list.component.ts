import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ProjectAddEditComponent} from '../project-add-edit/project-add-edit.component';
import {ProjectsService} from '../services/projects.service';
import {ProjectDeleteComponent} from '../project-delete/project-delete.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projectList: any;

  constructor(
    private _dialog: MatDialog,
    private _projectService: ProjectsService,
    ) {}

  ngOnInit(): void {
    this.projectList = this.getProjectList();
  }

  getProjectList(){
    this._projectService.getProjectList().subscribe({
      next: (res) => {
        this.projectList = res;
      },
      error: console.log
    })
  }

  openProjectDeleteConfirmation(data: any){
    const dialogRef = this._dialog.open(ProjectDeleteComponent, {
      data, 
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getProjectList();
        }
      }
    });
  }

  openEditProjectForm(data: any) {
    const dialogRef = this._dialog.open(ProjectAddEditComponent, {
      data, 
    });

    // updates list after edit
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getProjectList();
        }
      }
    })
  }
}
