import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Projects } from 'src/app/core/models/projects';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  listProjects: Projects[] = [];

  constructor(
    private projectsService: ProjectsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listProjects = this.projectsService.getProjects();
  }
}
