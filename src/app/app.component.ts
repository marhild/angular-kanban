import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ProjectAddEditComponent} from './project-add-edit/project-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _dialog: MatDialog, ) {}

  ngOnInit(): void {

  }

  openProjectAddEditForm(){
    const diaogRef = this._dialog.open(ProjectAddEditComponent);
  }

  getProjectList(){}
}
