import { Component, Input, OnInit } from '@angular/core';
import { Project, Technologies } from 'src/app/core/models/projects';

@Component({
    selector: 'app-card-project',
    templateUrl: './card-project.component.html',
    styleUrls: ['./card-project.component.scss'],
    standalone: false
})
export class CardProjectComponent implements OnInit {
  @Input() project!: Project;

  constructor() { }

  ngOnInit(): void {
  }

  redirectToDocumentation(tec: Technologies){
    if(tec.documentation != null)
    window.open(tec.documentation, "_blank");
  }

}
