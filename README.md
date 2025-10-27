# Design System

Um design system completo baseado em **PrimeVue 4.4.1** com tema **Aura**, **Tailwind CSS v4**, e **Storybook** para documentação interativa.

## 🚀 Características

- ✅ **PrimeVue 4.4.1** com tema Aura
- ✅ **Tailwind CSS v4** para estilização
- ✅ **Vue 3** com TypeScript
- ✅ **Turborepo** para monorepo
- ✅ **Storybook** para documentação interativa
- ✅ **18+ componentes** prontos para uso
- ✅ **Totalmente tipado** com TypeScript
- ✅ **Pacote NPM** publicável

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

## 🎨 Tema Aura

O design system utiliza o tema **Aura** do PrimeVue 4.4.1, que oferece:

- Design moderno e limpo
- Suporte a modo escuro (dark mode)
- Cores consistentes e acessíveis
- Animações suaves

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
