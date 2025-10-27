# Design System

Um design system completo baseado em **PrimeVue 4.4.1** com tema **DSS+360 Aura** customizado, **Tailwind CSS v4**, e **Storybook** para documentação interativa.

## 🚀 Características

- ✅ **PrimeVue 4.4.1** com tema DSS+360 Aura customizado
- ✅ **Tailwind CSS v4** para estilização
- ✅ **Vue 3** com TypeScript
- ✅ **Turborepo** para monorepo
- ✅ **Storybook** para documentação interativa
- ✅ **18+ componentes** prontos para uso
- ✅ **Totalmente tipado** com TypeScript
- ✅ **Pacote NPM** publicável
- ✅ **Tema customizado** com paleta navy e personalizações do time de design

## 📦 Estrutura do Projeto

```
design-system/
├── apps/
│   └── storybook/          # Aplicação Storybook para documentação
├── packages/
│   ├── design-system/      # Pacote principal do design system
│   ├── eslint-config/      # Configuração ESLint compartilhada
│   └── typescript-config/  # Configuração TypeScript compartilhada
└── package.json
```

## 🛠️ Instalação

### Pré-requisitos

- Node.js >= 18
- pnpm >= 9.0.0

### Instalar dependências

```bash
pnpm install
```

## 📚 Componentes Disponíveis

O design system inclui os seguintes componentes baseados no PrimeVue:

### Formulários
- **DSButton** - Botão com variantes de severidade e tamanho
- **DSInput** - Campo de texto
- **DSTextarea** - Área de texto
- **DSCheckbox** - Caixa de seleção
- **DSRadioButton** - Botão de rádio
- **DSDropdown** - Menu suspenso
- **DSCalendar** - Seletor de data

### Layout
- **DSCard** - Cartão com cabeçalho, conteúdo e rodapé
- **DSPanel** - Painel expansível
- **DSAccordion** - Acordeão
- **DSTabView** - Visualização de abas

### Dados
- **DSDataTable** - Tabela de dados com paginação

### Overlay
- **DSDialog** - Diálogo modal
- **DSMenu** - Menu contextual

### Feedback
- **DSToast** - Notificações toast
- **DSProgressBar** - Barra de progresso

### Misc
- **DSBadge** - Badge/distintivo
- **DSChip** - Chip removível

## 💻 Uso

### Instalando o Design System em seu projeto

```bash
# Se publicado no NPM
npm install @repo/design-system

# Ou usando pnpm
pnpm add @repo/design-system
```

### Configuração no Vue 3

```typescript
// main.ts
import { createApp } from 'vue'
import { installDesignSystem } from '@repo/design-system'
import '@repo/design-system/style.css'
import App from './App.vue'

const app = createApp(App)

// Instalar o design system (inclui PrimeVue com tema Aura)
installDesignSystem(app)

app.mount('#app')
```

### Usando Componentes

```vue
<template>
  <div>
    <DSCard title="Meu Cartão" subtitle="Subtítulo">
      <p>Conteúdo do cartão</p>
      
      <DSInput 
        v-model="inputValue" 
        placeholder="Digite algo..." 
      />
      
      <DSButton 
        label="Salvar" 
        severity="success" 
        @click="handleSave" 
      />
    </DSCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DSCard, DSInput, DSButton } from '@repo/design-system'

const inputValue = ref('')

const handleSave = () => {
  console.log('Salvando:', inputValue.value)
}
</script>
```

## 🎨 Tema DSS+360 Aura

O design system utiliza um tema customizado **DSS+360 Aura** baseado no tema Aura do PrimeVue 4.4.1, com personalizações criadas pelo time de design:

### Características do Tema

- **Cor primária Navy**: Paleta de cores navy (#191A35) como cor primária ao invés do azul padrão do Aura
- **Design moderno e limpo**: Mantém a estética moderna do Aura
- **Suporte a modo escuro (dark mode)**: Variantes light e dark totalmente configuradas
- **Cores consistentes e acessíveis**: Paleta de cores otimizada para acessibilidade
- **Animações suaves**: Transições e animações refinadas
- **Form fields customizados**: Estilização personalizada para campos de formulário com focus ring configurado
- **Border radius customizado**: Valores de border radius ajustados (xs: 2px, sm: 4px, md: 6px, lg: 8px, xl: 12px)

### Paleta de Cores Primária (Navy)

```typescript
primary: {
  50: '#E8E8EB',
  100: '#B8B8C1',
  200: '#9596A3',
  300: '#656679',
  400: '#30314B',
  500: '#191A35',  // Cor primária principal
  600: '#171832',
  700: '#121227',
  800: '#0E0E1E',
  900: '#0B0B17',
  950: '#010101'
}
```

### Ativando Dark Mode

```typescript
// Adicione a classe 'dark-mode' ao elemento raiz
document.documentElement.classList.add('dark-mode')
```

## 🎭 Storybook

O Storybook fornece documentação interativa de todos os componentes.

### Acessar Storybook

```bash
pnpm --filter storybook dev
```

Acesse: http://localhost:6006

## 🎯 Comandos Disponíveis

### Desenvolvimento

```bash
# Iniciar Storybook em modo de desenvolvimento
pnpm --filter storybook dev

# Build do design system em modo watch
pnpm --filter @repo/design-system dev
```

### Build

```bash
# Build de todos os pacotes
pnpm run build

# Build apenas do design system
pnpm --filter @repo/design-system build

# Build do Storybook
pnpm --filter storybook build
```

### Lint e Type Check

```bash
# Lint de todos os pacotes
pnpm run lint

# Type check de todos os pacotes
pnpm run check-types
```

## 🔧 Desenvolvimento

### Adicionando um Novo Componente

1. Crie o componente em `packages/design-system/src/components/`:

```vue
<!-- DSNewComponent.vue -->
<template>
  <PrimeVueComponent v-bind="$attrs" :prop="prop">
    <slot />
  </PrimeVueComponent>
</template>

<script setup lang="ts">
import PrimeVueComponent from 'primevue/component'

interface Props {
  prop?: string
}

defineProps<Props>()
</script>
```

2. Exporte no `src/index.ts`:

```typescript
export { default as DSNewComponent } from './components/DSNewComponent.vue'
```

3. Crie uma story em `apps/storybook/src/stories/`:

```typescript
// DSNewComponent.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import { DSNewComponent } from '@repo/design-system'

const meta = {
  title: 'Components/DSNewComponent',
  component: DSNewComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof DSNewComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    prop: 'value'
  }
}
```

## 🌐 Tailwind CSS v4

O design system utiliza Tailwind CSS v4 para estilização adicional. Você pode usar classes Tailwind em seus componentes:

```vue
<template>
  <DSCard class="max-w-md mx-auto mt-4">
    <DSButton class="w-full" label="Botão Full Width" />
  </DSCard>
</template>
```

## 📦 Publicação

Para publicar o pacote no NPM:

1. Atualize a versão em `packages/design-system/package.json`
2. Build do pacote:

```bash
pnpm --filter @repo/design-system build
```

3. Publique:

```bash
cd packages/design-system
npm publish
```

## 🔗 Links Úteis

- [PrimeVue Documentation](https://primevue.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Storybook Documentation](https://storybook.js.org/)
- [Turborepo Documentation](https://turbo.build/repo)
- [Vue 3 Documentation](https://vuejs.org/)

## 📄 Licença

MIT
