import { Injectable } from '@angular/core';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  project: Projects[] = [
    {
      image: '',
      name: 'Soul Viagens',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'TypesScript',
        'Bootstrap',
      ],
      database: 'Firebase',
      description:
        'Rede Social de viagens, onde os usuarios da aplicação podem postar sua viagens!',
    },
    {
      image: '',
      name: 'Helpr',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'TypesScript',
        'Bootstrap',
        'Java',
        'Spring Boot',
      ],
      database: 'MySQL',
      description:
        'Projeto desenvolvido com os Bootcampers de Java Spring com Angular e Firebase. Desenvolvido para criação de uma POC de atendimento de serviços de API com uso de Framework Spring Boot.',
    },
  ];
}
