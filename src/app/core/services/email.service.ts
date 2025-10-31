import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private readonly emailJsApiUrl = 'https://api.emailjs.com/api/v1.0/email/send';

  constructor(private http: HttpClient) {}

  sendContactEmail(payload: ContactFormPayload): Observable<boolean> {
    const { publicKey, serviceId, templateId } = environment.emailjs || {} as any;

    if (!publicKey || !serviceId || !templateId) {
      return of(false);
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: payload.name,
        from_email: payload.email,
        subject: payload.subject || 'Contato via Portfolio',
        message: payload.message
      }
    };

    return this.http.post(this.emailJsApiUrl, body, { headers }).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}


