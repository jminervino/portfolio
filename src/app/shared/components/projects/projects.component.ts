import { Component, OnInit } from '@angular/core';
import { Project, Technologies } from 'src/app/core/models/projects';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    standalone: false
})
export class ProjectsComponent implements OnInit {
  listProjects: Project[] = [];
  filteredProjects: Project[] = [];
  activeFilter: 'Todos' | 'Frontend' | 'Web' | 'Full Stack' = 'Todos';

  constructor(
    private projectsService: ProjectsService,
  ) {}

  ngOnInit(): void {
    this.listProjects = this.projectsService.getProjects();
    this.applyFilter('Todos');
  }

  scrollToContact(): void {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  applyFilter(filter: 'Todos' | 'Frontend' | 'Web' | 'Full Stack'): void {
    this.activeFilter = filter;
    if (filter === 'Todos') {
      this.filteredProjects = this.listProjects;
      return;
    }
    const normalized = filter.toLowerCase();
    this.filteredProjects = this.listProjects.filter((p) =>
      (p.categories || []).some((c) => c.toLowerCase() === normalized)
    );
  }
}
