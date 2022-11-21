import { Injectable } from '@angular/core';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  // ,
  //       'CSS',
  //       'JavaScript',
  //       'Angular',
  //       'TypesScript',
  //       'Bootstrap',
  //       'Java',
  //       'Spring Boot',
  private project: Projects[] = [
    {
      image:
        'https://claracloud.com.br/wp-content/uploads/2021/02/google-workspace.jpg',
      name: 'Helpr',
      technologies: [
        {
          name: 'Angular',
          color: 'color-angular',
          icon: '../../../../assets/img/icons8-angularjs-64.png',
        },
        {
          name: 'Spring Boot',
          color: 'color-spring',
          icon: '../../../../assets/img/icons8-spring-logo-64.png',
        },
        {
          name: 'TypesScript',
          color: 'color-typescript',
          icon: '../../../../assets/img/icons8-typescript-64.png',
        },
        {
          name: 'MySQL',
          color: 'color-mysql',
          icon: '../../../../assets/img/icons8-mysql-logo-64.png',
        },
      ],
      database: 'MySQL',
      description:
        'Projeto desenvolvido com os Bootcampers de Java Spring com Angular e Firebase. Desenvolvido para criação de uma POC de atendimento de serviços de API com uso de Framework Spring Boot.',
      repository: 'https://github.com/jminervino/helpr',
    },
    {
      image: './assets/img/projeto-copia-login-instagram.png',
      name: 'Copia Login Instagram',
      technologies: [
        {
          name: 'HTML',
          color: 'color-html',
          icon: '../../../../assets/img/icons8-html-5-64.png',
        },
        {
          name: 'CSS',
          color: 'color-css',
          icon: '../../../../assets/img/icons8-css3-64.png',
        },
      ],
      description: 'Copia do Login do Instagram com CSS e HTML puro',
      repository: 'https://github.com/jminervino/interface-instagram-login',
    },
    {
      image: './assets/img/flexpag-frontend.png',
      name: 'Desafio Flexpag',
      technologies: [
        {
          name: 'Angular',
          color: 'color-angular',
          icon: '../../../../assets/img/icons8-angularjs-64.png',
        },

        {
          name: 'TypesScript',
          color: 'color-typescript',
          icon: '../../../../assets/img/icons8-typescript-64.png',
        },
        // 'Moment.js',
        // 'Angular 9.0',
        // 'HTTP Client',
        // 'TypesScript',
        // 'Bootstrap',
      ],
      description:
        'Projeto proposto pela empresa FlexPag onde temos um historico de cotação com dados externos,  ',
      repository: 'https://github.com/jminervino/flexpag-desafio-frontend',
    },
  ];
  
  getProjects() {
    return this.project;
  }

  constructor() {}
}
