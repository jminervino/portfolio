import { Injectable } from '@angular/core';
import { Certificate } from '../models/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService {
  private certificate: Certificate[] = [
    {
      image: './assets/img/Certificado-Soulcode.png',
      name: 'Java Full Stack',
      company: 'SoulCode Academy',
      time: 640,
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypesScript',
        'Angular',
        'Java',
        'Spring Boot',
        'Bootstrap',
        'MySQL',
        'Firebase',
        'NodeJS',
      ],
    },
    {
      image: './assets/img/Certificado-Linux.png',
      name: 'Linux: A introdução ao sistema operacional',
      company: 'Digital Innavation One',
      time: 10,
      technologies: ['Linux'],
    },
    {
      image: './assets/img/Certificado-Iniciativa-Padawan.png',
      name: 'Iniciativa Padawan',
      company: 'Felipe Reinaux',
      time: 40,
      technologies: ['NodeJS', 'JavaScript'],
    },
  ];

  getCertificates() {
    return this.certificate;
  }

  constructor() {}
}
