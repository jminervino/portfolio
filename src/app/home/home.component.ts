import { Component, OnInit } from '@angular/core';
import { ButtonsHome } from '../core/models/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contactTexts = ['Desenvolvedor Full Stack', 'Desenvolvedor Flutter'];

  redirectToLink(button: ButtonsHome){
    if(button.link != null || button.link != undefined)
    window.open(button.link, '_blank')
  }

  buttonsHome: ButtonsHome[] = [
    {
      img: './../../assets/img/icons8-github-60.png',
      text: 'Github',
      link: "https://github.com/jminervino",
    },
    {
      img: './../../assets/img/icons8-linkedin-60.png',
      text: 'Linkedin',
      link: "https://www.linkedin.com/in/joão-victor-minervino-de-araújo-67b327222/",
    },
    {
      img: './../../assets/img/icons8-mail-60.png',
      text: 'Email',
      link: "mailto:joaovictor_minervino@hotmail.com"
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}



















