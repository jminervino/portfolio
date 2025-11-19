# 📘 Guia de Atualização: Angular 14 → Angular 20

## ⚠️ IMPORTANTE: Antes de Começar

1. **Faça um backup completo do seu projeto** (commit no Git ou cópia da pasta)
2. **Feche o servidor de desenvolvimento** se estiver rodando
3. **Certifique-se de ter Node.js atualizado** (versão 18 ou superior)

---

## 📋 Passo a Passo da Atualização

### **PASSO 1: Verificar Versões Atuais**

Execute no terminal:
```bash
ng version
```

Isso mostrará as versões atuais do Angular CLI e do Angular no seu projeto.

---

### **PASSO 2: Atualizar o Angular CLI Globalmente**

Instale a versão mais recente do Angular CLI globalmente:
```bash
npm install -g @angular/cli@latest
```

Verifique a instalação:
```bash
ng version
```

---

### **PASSO 3: Atualização Incremental do Angular**

O Angular recomenda atualizar versão por versão. Vamos fazer isso automaticamente:

#### **3.1: Atualizar de Angular 14 para 15**
```bash
ng update @angular/core@15 @angular/cli@15
```

#### **3.2: Atualizar de Angular 15 para 16**
```bash
ng update @angular/core@16 @angular/cli@16
```

#### **3.3: Atualizar de Angular 16 para 17**
```bash
ng update @angular/core@17 @angular/cli@17
```

#### **3.4: Atualizar de Angular 17 para 18**
```bash
ng update @angular/core@18 @angular/cli@18
```

#### **3.5: Atualizar de Angular 18 para 19**
```bash
ng update @angular/core@19 @angular/cli@19
```

#### **3.6: Atualizar de Angular 19 para 20 (Versão Mais Recente)**
```bash
ng update @angular/core@20 @angular/cli@20
```

**OU** você pode tentar atualizar diretamente para a versão mais recente:
```bash
ng update @angular/core@latest @angular/cli@latest
```

---

### **PASSO 4: Atualizar Dependências Relacionadas**

#### **4.1: Angular Material**
Se você usa Angular Material, atualize também:
```bash
ng update @angular/material@latest
```

#### **4.2: Outras Dependências Angular**
Atualize outras bibliotecas Angular que você usa:
```bash
ng update @angular/cdk@latest
ng update @angular/localize@latest
```

#### **4.3: Dependências de Terceiros**
Atualize dependências relacionadas:
```bash
ng update @ng-bootstrap/ng-bootstrap@latest
```

---

### **PASSO 5: Instalar Dependências**

Após todas as atualizações, instale as dependências:
```bash
npm install
```

---

### **PASSO 6: Verificar e Corrigir Problemas**

#### **6.1: Verificar Erros de Compilação**
```bash
ng build
```

#### **6.2: Verificar Erros de Lint**
```bash
ng lint
```

#### **6.3: Executar Testes**
```bash
ng test
```

---

### **PASSO 7: Testar a Aplicação**

Inicie o servidor de desenvolvimento:
```bash
ng serve
```

Acesse `http://localhost:4200` e verifique se tudo está funcionando corretamente.

---

## 🔧 Mudanças Importantes Entre Versões

### **Angular 15 → 16:**
- Standalone components se tornam padrão
- Signals introduzidos
- Melhorias no SSR

### **Angular 16 → 17:**
- Novo sistema de controle de fluxo (@if, @for, @switch)
- Signals mais maduros
- Melhorias no SSR

### **Angular 17 → 18:**
- Material 3
- Zoneless Angular (opcional)
- Melhorias em Signals

### **Angular 18 → 19:**
- Melhorias em Signals
- Novos recursos de performance

### **Angular 19 → 20:**
- Últimas melhorias e correções
- Performance otimizada

---

## ⚠️ Possíveis Problemas e Soluções

### **Problema 1: Conflitos de Dependências**
**Solução:** Execute `npm install --force` (use com cuidado)

### **Problema 2: Erros de TypeScript**
**Solução:** Atualize o TypeScript:
```bash
npm install --save-dev typescript@latest
```

### **Problema 3: Polyfills Obsoletos**
**Solução:** O arquivo `polyfills.ts` pode não ser mais necessário. Verifique se pode ser removido ou atualizado.

### **Problema 4: Imports Obsoletos**
**Solução:** O Angular pode sugerir migrações automáticas. Execute:
```bash
ng generate @angular/core:standalone
```

---

## 📝 Checklist Final

- [ ] Backup do projeto feito
- [ ] Angular CLI atualizado globalmente
- [ ] Angular atualizado para versão 20
- [ ] Dependências atualizadas
- [ ] Projeto compila sem erros (`ng build`)
- [ ] Aplicação roda corretamente (`ng serve`)
- [ ] Testes passam (`ng test`)
- [ ] Código revisado e ajustado conforme necessário

---

## 🆘 Precisa de Ajuda?

Se encontrar problemas durante a atualização:
1. Consulte a [documentação oficial do Angular](https://angular.io/guide/update)
2. Verifique os [guias de migração](https://angular.io/guide/updating)
3. Revise os logs de erro no terminal

---

**Boa sorte com a atualização! 🚀**

