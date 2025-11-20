import { Component, Input, OnInit } from '@angular/core';

export interface ProjetoResumo {
  titulo: string;
  empresa: string;
  periodo: string;
  stack: string[];
  descricao: string;
}

@Component({
    selector: 'app-card-professional-project',
    templateUrl: './card-professional-project.component.html',
    styleUrls: ['./card-professional-project.component.scss'],
    standalone: false
})
export class CardProfessionalProjectComponent implements OnInit {
  @Input() projetoResumo!: ProjetoResumo;

  constructor() { }

  ngOnInit(): void {
  }

  // Método para verificar se a empresa é confidencial
  isConfidential(): boolean {
    return this.projetoResumo.empresa.toLowerCase().includes('confidencial');
  }

  // Método para extrair informações de consultoria
  getConsultingInfo(): { empresa: string; via?: string } {
    const empresa = this.projetoResumo.empresa;
    if (empresa.includes(' (via ')) {
      const parts = empresa.split(' (via ');
      return {
        empresa: parts[0],
        via: parts[1].replace(')', '')
      };
    }
    return { empresa };
  }
}
