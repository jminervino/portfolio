import { Component, OnInit } from '@angular/core';
import { Skills, Stack } from 'src/app/core/models/skills';
import { SkillsService } from 'src/app/core/services/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];
  stacks: Stack[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
    this.stacks = this.skillsService.getStacks();
  }
}
