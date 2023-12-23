import { Injectable } from '@angular/core';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private project: Projects[] = [
    {
      image:
        'assets/img/helpr.jpeg',
      name: 'Helpr',
      technologies: [
        {
          name: 'Angular',
          color: 'color-angular',
          icon: '../../../../assets/img/icons8-angularjs-64.png',
          documentation: "https://angular.io/docs",
        },
        {
          name: 'Spring Boot',
          color: 'color-spring',
          icon: '../../../../assets/img/icons8-spring-logo-64.png',
          documentation: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/",
        },
        {
          name: 'TypesScript',
          color: 'color-typescript',
          icon: '../../../../assets/img/icons8-typescript-64.png',
          documentation: "https://www.typescriptlang.org/docs/"
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
      ano: "2022"
    },
    {
      image:
        'assets/img/goodpay.jpeg',
      name: 'GoodPay',
      technologies: [
        {
          name: 'HTML',
          color: 'color-html',
          icon: '../../../../assets/img/icons8-html-5-64.png',
          documentation: "https://html.com/document/",
        },
        {
          name: 'CSS',
          color: 'color-css',
          icon: '../../../../assets/img/icons8-css3-64.png',
          documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: 'JavaScript',
          color: 'color-javascript',
          icon: '../../../../assets/img/icons8-javascript-64.png',
          documentation: "https://javascript.info",
        },
      ],
      database: 'MySQL',
      description:
        'A Goodpay é uma plataforma de pagamento desenvolvida durante o bootcamp da Soulcode, com o objetivo de aplicar e aprimorar os conhecimentos adquiridos em HTML5, CSS3 e Bootstrap.',
      repository: 'https://github.com/jminervino/helpr',
      ano: "2022"
    },

    {
      image: './assets/img/flexpag-frontend.png',
      name: 'Desafio Flexpag',
      technologies: [
        {
          name: 'Angular',
          color: 'color-angular',
          icon: '../../../../assets/img/icons8-angularjs-64.png',
          documentation: "https://angular.io/docs"
        },

        {
          name: 'TypesScript',
          color: 'color-typescript',
          icon: '../../../../assets/img/icons8-typescript-64.png',
          documentation: "https://www.typescriptlang.org/docs/"
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
      ano: "2022"
    },
    {
      image: './assets/img/projeto-copia-login-instagram.png',
      name: 'Copia Login Instagram',
      technologies: [
        {
          name: 'HTML',
          color: 'color-html',
          icon: '../../../../assets/img/icons8-html-5-64.png',
          documentation: "https://html.com/document/"
        },
        {
          name: 'CSS',
          color: 'color-css',
          icon: '../../../../assets/img/icons8-css3-64.png',
          documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
      ],
      description: 'Copia do Login do Instagram com CSS e HTML puro',
      repository: 'https://github.com/jminervino/interface-instagram-login',
      ano: "2021"
    },
  ];

  getProjects() {
    return this.project;
  }

  constructor() {}
}
