import { Injectable } from '@angular/core';
import { Skills, Stack } from '../models/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private stacks: Stack[] = [
    {stack: "Frontend", dataCor: 1},
    {stack: "Backend", dataCor: 2},
    {stack: "Database", dataCor: 3},
    {stack: "Mobile", dataCor: 4},
  ]

  private skills: Skills[] = [
    {
      icon: 'assets/img/icons8-html-5-64.png',
      name: 'HTML',
      experience: 'Avançado',
    },
    {
      icon: 'assets/img/icons8-css3-64.png',
      name: 'CSS',
      experience: 'Intermediario',
    },
    {
      icon: 'assets/img/icons8-javascript-64.png',
      name: 'JavaScript',
      experience: 'Intermediario',
    },
    {
      icon: 'assets/img/icons8-typescript-64.png',
      name: 'TypeScript',
      experience: 'Intermediario',
    },
    {
      icon: 'assets/img/icons8-angularjs-64.png',
      name: 'Angular',
      experience: 'Intermediario',
    },
    {
      icon: 'assets/img/icons8-node-js-64.png',
      name: 'Node.js',
      experience: 'Intermediario',
    },
    {
      icon: 'assets/img/icons8-logo-java-coffee-cup-64.png',
      name: 'Java',
      experience: 'Basico',
    },
    {
      icon: 'assets/img/icons8-spring-logo-64.png',
      name: 'Spring Boot',
      experience: 'Basico',
    },
    {
      icon: 'assets/img/icons8-mysql-logo-64.png',
      name: 'MySQL',
      experience: 'Basico',
    },
    {
      icon: 'assets/img/icons8-bootstrap-64.png',
      name: 'Bootstrap',
      experience: 'Intermediario',
    },
    {
      icon: 'assets/img/icons8-firebase-64.png',
      name: 'Firebase',
      experience: 'Intermediario',
    },
  ];

  getStacks(): Stack[]{
    return this.stacks;
  }

  getSkills(): Skills[] {
    return this.skills;
  }

  constructor() {}
}
