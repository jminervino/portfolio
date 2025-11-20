import { Component, Input, OnInit, } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
    selector: 'app-card-experience',
    templateUrl: './card-experience.component.html',
    styleUrls: ['./card-experience.component.scss'],
    standalone: false
})
export class CardExperienceComponent implements OnInit {

  @Input() typeIcon: string = '';
  @Input() company: string = '';
  @Input() title: string = '';
  @Input() office: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
  @Input() icon: string = '';
  @Input() lineStyle: { [klass: string]: any } = {};
  iconSanitizer: SafeHtml = '';
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let modifiedIcon = this.icon;
    if (this.title === 'Devzapp') {
      // Adicione estilos diretamente no SVG
      modifiedIcon = this.icon.replace('<svg', '<svg style="width: 45px; height: 45px;"');
    }

    this.iconSanitizer = this.sanitizer.bypassSecurityTrustHtml(this.icon)
  }

}
