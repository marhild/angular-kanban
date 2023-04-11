import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ProjectAddEditComponent} from './project-add-edit/project-add-edit.component';
import {ProjectsService} from './services/projects.service';
import {ProjectDeleteComponent} from './project-delete/project-delete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(
    private _dialog: MatDialog,
    private _projectService: ProjectsService,
    ) {}

  ngOnInit(): void {}

  openProjectAddEditForm(){
    const dialogRef = this._dialog.open(ProjectAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this._projectService.sendAddEditProjectEvent();
        }
      }
    })
  }
}
