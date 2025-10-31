import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../core/services/email.service';

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

  sending = false;
  successMessage = '';
  errorMessage = '';
  infoMessage = '';

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.isFormValid()) {
      this.successMessage = '';
      this.errorMessage = '';
      this.infoMessage = '';
      this.sending = true;
      this.emailService.sendContactEmail(this.formData).subscribe((sent) => {
        if (!sent) {
          const subject = encodeURIComponent(this.formData.subject || 'Contato via Portfolio');
          const body = encodeURIComponent(
            `Nome: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMensagem:\n${this.formData.message}`
          );
          const mailtoLink = `mailto:jvminervinoaraujo@gmail.com?subject=${subject}&body=${body}`;
          window.location.href = mailtoLink;
          this.infoMessage = 'Abrindo seu cliente de e-mail...';
        } else {
          this.successMessage = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
        }
        this.resetForm();
        this.sending = false;
      }, (err) => {
        this.errorMessage = 'Não foi possível enviar no momento. Tente novamente mais tarde.';
        this.sending = false;
      });
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
