import { Component, OnInit } from '@angular/core';
import { ButtonsHome } from '../core/models/components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contactTexts = ['Desenvolvedor Full Stack', 'Desenvolvedor Flutter'];

  buttonsHome: ButtonsHome[] = [
    {
      img: './../../assets/img/icons8-github-50.png',
      text: 'Github',
    },
    {
      img: './../../assets/img/icons8-linkedin-50.png',
      text: 'Linkedin',
    },
    {
      img: './../../assets/img/icons8-mensagem-preenchida-50.png',
      text: 'Email',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}



















