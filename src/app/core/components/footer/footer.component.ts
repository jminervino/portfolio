import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit, OnDestroy {

  currentYear = new Date().getFullYear();
  showBackToTop = false;

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joão-victor-minervino-de-araújo-67b327222/',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/joao-victor-dev',
      icon: 'fab fa-github'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/joao.victor.dev',
      icon: 'fab fa-instagram'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5511999999999',
      icon: 'fab fa-whatsapp'
    }
  ];

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showBackToTop = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToSection(selector: string): void {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
