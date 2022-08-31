import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  
  constructor() { }

  cards: Object[] = [
    {
      nome: "Helpr",
      tecnologias: ["Angular", "Spring"],
      banco: "MySQL",
      repositorio: "https://github.com/jminervino/helpr"
    },
    {
      nome: "Soul-Viagens",
      tecnologias: ["Angular"],
      banco: "Firebase",
      repositorio: "https://github.com/jminervino/projeto-soul-viagens"
    },
    {
      nome: "Goodpay",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      banco: undefined,
      repositorio: "https://github.com/jminervino/GoodPay"
    },
  ]; 
  
  ngOnInit(): void {
  }
  

}
