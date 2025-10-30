import { Component, OnInit, OnDestroy } from '@angular/core';

interface HomeButton {
  text: string;
  img: string;
  link: string;
  type: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  buttonsHome: HomeButton[] = [
    {
      text: 'Ver Projetos',
      img: 'assets/icons/projects.svg',
      link: '#projetos',
      type: 'primary'
    },
    {
      text: 'Entre em Contato',
      img: 'assets/icons/contact.svg',
      link: '#contato',
      type: 'secondary'
    }
  ];

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

  private typingInterval: any;
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typingTexts = [
    'Desenvolvedor Full Stack',
    'Especialista em Angular & React',
    'Backend com Node.js',
    'Criador de Soluções Web',
    'Solucionador de Problemas'
  ];

  constructor() { }

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  redirectToLink(button: HomeButton): void {
    if (button.link.startsWith('#')) {
      // Navegação interna
      const element = document.querySelector(button.link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Link externo
      window.open(button.link, '_blank');
    }
  }

  private startTypingAnimation(): void {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    this.typingInterval = setInterval(() => {
      const currentText = this.typingTexts[this.currentTextIndex];

      if (!this.isDeleting) {
        // Digitando
        this.currentCharIndex++;
        typingElement.textContent = currentText.substring(0, this.currentCharIndex);

        if (this.currentCharIndex === currentText.length) {
          // Pausa antes de começar a deletar
          setTimeout(() => {
            this.isDeleting = true;
          }, 2000);
        }
      } else {
        // Deletando
        this.currentCharIndex--;
        typingElement.textContent = currentText.substring(0, this.currentCharIndex);

        if (this.currentCharIndex === 0) {
          this.isDeleting = false;
          this.currentTextIndex = (this.currentTextIndex + 1) % this.typingTexts.length;
        }
      }
    }, this.isDeleting ? 50 : 100);
  }
}



















