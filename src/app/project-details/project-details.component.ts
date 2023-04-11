import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../common/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  project! : Project;

  constructor(
    private route: ActivatedRoute,
    private _projectService: ProjectsService,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handlePrjectDetails();
    })
  }

  handlePrjectDetails() {
    //get id string and convert to a number
    const theProjectId: number = +this.route.snapshot.paramMap.get('id')!;

    this._projectService.getProjectById(theProjectId).subscribe({
      next: (res) => {
        this.project = res;
      },
      error: console.log
    })
  }
}
