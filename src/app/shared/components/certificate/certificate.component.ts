import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/core/models/certificate';
import { CertificatesService } from 'src/app/core/services/certificates.service';

@Component({
    selector: 'app-certificate',
    templateUrl: './certificate.component.html',
    styleUrls: ['./certificate.component.scss'],
    standalone: false
})
export class CertificateComponent implements OnInit {
  listCertificates: Certificate[] = [];
  selectedIndex = 0;
  indicators = 0;

  imgs = document.getElementById('imgs');
  img = document.querySelectorAll('#img img');

  constructor(private certificateService: CertificatesService) {}

  carousel(): void {
    this.selectedIndex++;
    if (this.selectedIndex > this.img.length - 1) {
      this.selectedIndex = 0;
    }

    if (this.imgs)
      this.imgs.style.transform = `translateX(${-this.selectedIndex * 600}px)`;
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  next(): void {
    if (this.selectedIndex >= this.listCertificates.length - 1) return;
    this.selectedIndex++;
  }

  previus(): void {
    if (this.selectedIndex <= 0) return;
    this.selectedIndex--;
  }

  openCertificate(certificate: Certificate): void {
    // Implementar abertura do certificado em modal ou nova aba
    if (certificate.image) {
      window.open(certificate.image, '_blank');
    }
  }

  ngOnInit(): void {
    this.listCertificates = this.certificateService.getCertificates();
    this.indicators = this.listCertificates.length;
  }
}
