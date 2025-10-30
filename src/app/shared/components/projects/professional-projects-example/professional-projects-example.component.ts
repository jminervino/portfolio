import { Component, OnInit } from '@angular/core';
import { ProjetoResumo } from '../card-professional-project/card-professional-project.component';

@Component({
  selector: 'app-professional-projects-example',
  templateUrl: './professional-projects-example.component.html',
  styleUrls: ['./professional-projects-example.component.scss']
})
export class ProfessionalProjectsExampleComponent implements OnInit {

  // Array de projetos profissionais - para usar o componente, basta alterar este array
  projetosProfissionais: ProjetoResumo[] = [
    {
      titulo: "Formulário PDI Customizável",
      empresa: "Gueiros (via Fy.tec)",
      periodo: "06/2025",
      stack: ["Vue.js", "PHP Laravel"],
      descricao: "Implementei um sistema de formulários PDI (Plano de Desenvolvimento Individual) totalmente customizável, permitindo que administradores criassem avaliações com três opções de resposta: 'Apto', 'Muito apto' e 'Inapto'. O sistema foi integrado ao ecossistema modular da Gueiros, com possibilidade de configurar recorrência (trimestral, semestral ou mensal) para reapresentação automática do formulário ao usuário. Os usuários eram direcionados diretamente para essa tela de formulário ao entrar no sistema, e só podiam navegar para outras áreas após responderem. Criei também um painel de administração para visualização das respostas de todos os usuários. Essa funcionalidade otimizou a gestão de performance e qualificação de clientes da área contábil."
    },
    {
      titulo: "Gestão de Contatos Duplicados em Grupos de WhatsApp",
      empresa: "Devzapp",
      periodo: "2025",
      stack: ["Z-API", "Angular 13", "Spring Boot", "Java", "TypeScript"],
      descricao: "Desenvolvi uma integração com a Z-API para identificar e gerenciar contatos duplicados em grupos de WhatsApp vinculados a campanhas específicas. A aplicação listava os contatos repetidos com seus respectivos grupos e indicava visualmente quais grupos o usuário logado era administrador. Com isso, o sistema permitia a remoção seletiva dos contatos de determinados grupos, oferecendo mais controle sobre a organização das campanhas e prevenindo comunicações duplicadas."
    },
    {
      titulo: "CRUD de Modais Personalizáveis com Suporte a Micro-Frontends",
      empresa: "Devzapp",
      periodo: "2025",
      stack: ["Angular 13", "Micro-frontend architecture", "TypeScript", "RxJS", "Java", "Spring Boot"],
      descricao: "Implementei um CRUD completo para modais customizados dentro de uma arquitetura baseada em micro-frontends, onde cada rota da sidebar representa um projeto independente. O sistema permite ao administrador definir em quais rotas específicas o modal deve ser exibido, garantindo segmentação de conteúdo e comportamento modular. Os modais são altamente configuráveis, podendo ser reutilizados em diferentes contextos e se adaptam dinamicamente ao projeto carregado. Essa solução aumentou a flexibilidade da plataforma e reduziu a necessidade de hardcoded modais em múltiplos repositórios."
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
