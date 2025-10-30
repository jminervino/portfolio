import { Component, OnInit } from '@angular/core';
import { Project, Technologies } from 'src/app/core/models/projects';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  listProjects: Project[] = [];

  constructor(
    private projectsService: ProjectsService,
  ) {}

  ngOnInit(): void {
    this.listProjects = this.projectsService.getProjects();
  }

  scrollToContact(): void {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
