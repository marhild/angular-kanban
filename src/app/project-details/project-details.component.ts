import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../common/project';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddEditComponent } from '../task-add-edit/task-add-edit.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  project!: Project;

  constructor(
    private route: ActivatedRoute,
    private _projectService: ProjectsService,
    private _dialog: MatDialog,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProjectDetails();
    })
  }

  handleProjectDetails() {
    //get id string and convert to a number
    const theProjectId: number = +this.route.snapshot.paramMap.get('id')!;

    this._projectService.getProjectById(theProjectId).subscribe({
      next: (res) => {
        this.project = res;
      },
      error: console.log
    })
  }

  openAddTask(data: any) {
    const dialogRef = this._dialog.open(TaskAddEditComponent, {data,});

    // updates list after edit
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          //this.getProjectList();
        }
      }
    })
  }
}
