import { Component, OnInit } from '@angular/core';
import { NavbarLinks } from '../../models/components';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarLinks: NavbarLinks[] = [
    {
      text: 'Sobre mim',
      link: '',
    },
    {
      text: 'Conhecimento',
      link: '',
    },
    {
      text: 'Contato',
      link: '',
    },
    {
      text: 'Projetos',
      link: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
