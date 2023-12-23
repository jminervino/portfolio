import { Component, OnInit } from '@angular/core';
import { Projects, Technologies } from 'src/app/core/models/projects';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  listProjects: Projects[] = [];

  redirectToDocumentation(tec: Technologies){
    if(tec.documentation != null)
    window.open(tec.documentation, "_blank");
  }

  constructor(
    private projectsService: ProjectsService,
  ) {}

  ngOnInit(): void {
    this.listProjects = this.projectsService.getProjects();
  }
}
