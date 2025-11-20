import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-card-skills',
    templateUrl: './card-skills.component.html',
    styleUrls: ['./card-skills.component.scss'],
    standalone: false
})
export class CardSkillsComponent implements OnInit {

  @Input() name: string = '';
  @Input() icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
