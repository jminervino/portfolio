import { Component, OnInit } from '@angular/core';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.isFormValid()) {
      // Simular envio do formulário
      console.log('Formulário enviado:', this.formData);

      // Criar mailto link como fallback
      const subject = encodeURIComponent(this.formData.subject || 'Contato via Portfolio');
      const body = encodeURIComponent(
        `Nome: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMensagem:\n${this.formData.message}`
      );
      const mailtoLink = `mailto:joaovictor@example.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      // Resetar formulário
      this.resetForm();
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.message.trim()
    );
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
