import { Component, OnInit } from '@angular/core';
import { NavbarLinks } from '../../models/components';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent implements OnInit {
  navbarLinks: NavbarLinks[] = [
    {
      text: 'Sobre mim',
      link: '#sobre',
    },
    {
      text: 'Habilidades',
      link: '#habilidades',
    },
    {
      text: 'Projetos',
      link: '#projetos',
    },
    {
      text: 'Contato',
      link: '#contato',
    },
  ];

  isMenuOpen = false;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToSection(link: string): void {
    this.closeMenu();

    if (link.startsWith('#')) {
      // Pequeno delay para permitir que o menu mobile feche primeiro
      setTimeout(() => {
        const element = document.querySelector(link);
        if (element) {
          const navbarHeight = 80; // Altura da navbar
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }
}
