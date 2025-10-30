# Componente de Projetos Profissionais

## 📋 Descrição

Componente Angular reutilizável para exibir projetos profissionais que possuem código confidencial. O design segue o padrão visual moderno do portfólio com suporte ao sistema dark/light theme.

## 🎯 Características

- ✅ **Design moderno** com hover effects e animações suaves
- ✅ **Responsivo** para desktop, tablet e mobile
- ✅ **Tema dark/light** automático
- ✅ **Reutilizável** - apenas altere o campo `projetoResumo`
- ✅ **Profissional** com badges de status e confidencialidade
- ✅ **Suporte a consultoria** - detecta automaticamente se é "via empresa"

## 🚀 Como Usar

### 1. Importe o Componente

O componente já está declarado no `SharedModule`. Certifique-se de que o `SharedModule` está importado na sua página.

### 2. Defina seus Projetos

```typescript
import { ProjetoResumo } from '../card-professional-project/card-professional-project.component';

export class MeuComponente {
  // Basta alterar este array para seus projetos
  meusProjetos: ProjetoResumo[] = [
    {
      titulo: "Formulário PDI Customizável",
      empresa: "Gueiros (via Fy.tec)",
      periodo: "06/2025",
      stack: ["Vue.js", "PHP Laravel"],
      descricao: "Implementei um sistema de formulários PDI..."
    },
    {
      titulo: "Sistema de Gestão Financeira",
      empresa: "Empresa Confidencial",
      periodo: "03/2024 - 08/2024", 
      stack: ["Angular", "Node.js", "PostgreSQL", "Docker"],
      descricao: "Desenvolvi um sistema completo..."
    }
  ];
}
```

### 3. Use no Template

```html
<!-- Para um único projeto -->
<app-card-professional-project [projetoResumo]="meuProjeto">
</app-card-professional-project>

<!-- Para múltiplos projetos -->
<div class="projects-grid">
  <app-card-professional-project
    *ngFor="let projeto of meusProjetos"
    [projetoResumo]="projeto">
  </app-card-professional-project>
</div>
```

## 📝 Interface ProjetoResumo

```typescript
interface ProjetoResumo {
  titulo: string;        // Nome do projeto
  empresa: string;       // Nome da empresa ou "Empresa Confidencial"
  periodo: string;       // Ex: "06/2025" ou "03/2024 - 08/2024"
  stack: string[];       // Array de tecnologias
  descricao: string;     // Descrição detalhada do projeto
}
```

## 🎨 Layout Responsivo

### Desktop (> 768px)
- Card completo com layout horizontal
- Ícone à esquerda, informações no centro, período à direita
- Hover effects com elevação do card

### Tablet/Mobile (≤ 768px)
- Layout vertical empilhado
- Badges reorganizados para melhor legibilidade
- Espaçamentos otimizados

### Mobile (≤ 480px)
- Layout em coluna única
- Textos e ícones redimensionados
- Centralização de elementos

## 🎯 Casos de Uso

### 1. Projeto com Consultoria
```typescript
{
  titulo: "Sistema ERP",
  empresa: "MinhaEmpresa (via ConsultoriaTech)", // Detecta automaticamente
  periodo: "2024",
  stack: ["React", "Node.js"],
  descricao: "Projeto desenvolvido via consultoria..."
}
```

### 2. Projeto Confidencial
```typescript
{
  titulo: "Plataforma Interna",
  empresa: "Empresa Confidencial", // Exibe badge de confidencial
  periodo: "2024",
  stack: ["Angular", "Spring Boot"],
  descricao: "Sistema interno sigiloso..."
}
```

### 3. Projeto Direto
```typescript
{
  titulo: "App Mobile",
  empresa: "StartupTech",
  periodo: "2024",
  stack: ["Flutter", "Firebase"],
  descricao: "Desenvolvimento direto para cliente..."
}
```

## 🎨 Customização de Estilos

Para ajustar o visual, edite o arquivo `card-professional-project.component.scss`:

```scss
.professional-project-card {
  // Altere cores, bordas, etc.
  border-radius: 20px; // Bordas arredondadas
  padding: 32px;       // Espaçamento interno
  
  &:hover {
    transform: translateY(-8px); // Elevação no hover
  }
}
```

## 🌟 Recursos Visuais

- **Ícone de maleta** no header
- **Tags de tecnologias** interativas com hover
- **Badges coloridos** (Projeto Profissional + Concluído)
- **Pontos decorativos** no canto superior direito
- **Borda superior animada** no hover
- **Transições suaves** em todos os elementos

## 💡 Dicas de Uso

1. **Descrições claras**: Foque no problema resolvido, sua contribuição e resultados
2. **Stack relevante**: Inclua apenas as tecnologias principais
3. **Períodos precisos**: Use formatos consistentes (MM/YYYY ou MM/YYYY - MM/YYYY)
4. **Confidencialidade**: Use "Empresa Confidencial" quando necessário
5. **Consultoria**: Use formato "Empresa (via Consultoria)" para projetos terceirizados

## 📱 Preview do Componente

O componente exibe:
- 🏢 **Header**: Ícone + título + empresa + período
- 💻 **Stack**: Lista de tecnologias com hover interativo  
- 📄 **Descrição**: Texto justificado e bem formatado
- 🏷️ **Badges**: Status profissional e de conclusão
- 🎨 **Decoração**: Pontos coloridos e animações sutis

Pronto para uso! Basta alterar o array `projetoResumo` com seus próprios projetos. 
