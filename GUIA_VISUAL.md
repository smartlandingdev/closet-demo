# 🎨 Guia Visual Rápido - Closetly

## 📱 Estrutura de Telas

### 1. 🏠 Home (Dashboard)
**Objetivo**: Visão geral do dia e atalhos rápidos

**Elementos principais**:
- Saudação personalizada + clima atual
- Look sugerido do dia (card destacado)
- Agenda semanal horizontal (scroll)
- Card de insights (peças sem uso)
- CTA para gerar look com IA

**Cores predominantes**: Branco, #C2DC80 (verde claro), #D56989 (rosa)

---

### 2. 👗 Closet (Guarda-Roupa)
**Objetivo**: Visualizar e gerenciar peças

**Elementos principais**:
- Contador de peças
- Filtros por categoria (chips horizontais)
- Grid 3 colunas de cards de peças
- Cada card: emoji/foto + nome + tags (cor, estação)
- FAB (+) para adicionar peça

**Cores predominantes**: #F3EEF1 (background soft), branco

---

### 3. ✨ IA Looks
**Objetivo**: Gerar combinações automáticas

**Elementos principais**:
- Filtros contextuais (ocasião, clima)
- Preview central do look (3-5 peças)
- Nome do look + descrição
- Ações: Salvar / Gerar outro / Agendar
- Botão Try-On (experimentar)
- Hint de swipe horizontal

**Cores predominantes**: #F3EEF1 (card soft), #C2DC80 (botão primário)

---

### 4. 🛍️ Marketplace (Brechó)
**Objetivo**: Comprar/vender peças sustentáveis

**Elementos principais**:
- Tabs: Explorar / Vendendo / Favoritos
- Barra de busca
- Filtros: Localização, Preço, Tamanho, Categoria
- Grid 2 colunas de produtos
- Badge de sustentabilidade (CO₂ economizado)
- Card de impacto ambiental

**Cores predominantes**: Branco, gradient verde-rosa (impacto)

---

### 5. 📊 Estatísticas
**Objetivo**: Analytics de uso e insights

**Elementos principais**:
- KPIs principais (3 cards): Total peças / Custo por uso / Taxa uso
- Card de economia mensal (gradient)
- Top 5 peças mais usadas (lista com ranking)
- Distribuição de cores (barras de progresso)
- Peças ociosas (+90 dias) com CTA venda

**Cores predominantes**: Gradientes coloridos, gráficos visuais

---

### 6. 👤 Perfil
**Objetivo**: Configurações e preferências

**Elementos principais**:
- Avatar circular (gradient)
- Nome + data de cadastro
- Tags de preferências de estilo
- Conquistas (badges 3 colunas)
- Configurações (lista com ícones)
- Impacto ambiental (card gradient)
- Links: Sobre / Suporte / Termos
- Botão Sair

**Cores predominantes**: Gradient verde-rosa, branco

---

## 🧩 Componentes Reutilizáveis

### Bottom Navigation
- 5 itens fixos
- Ícones emoji + texto
- Estado ativo (cor primária)
- Always visible

### Cards
```css
border-radius: 16px;
box-shadow: 0 4px 12px rgba(30, 51, 9, 0.08);
padding: 24px;
```

### Botões
- **Primário**: Fundo #C2DC80, texto escuro
- **Secundário**: Outline #D56989
- **Accent**: Fundo #EA9CAF, texto branco

### FAB (Floating Action Button)
- Posição: Fixed bottom-right
- Cor: #EA9CAF
- Tamanho: 56x56px
- Ícone: +

---

## 🎨 Aplicação das Cores

### Verde Claro (#C2DC80)
- Botões primários
- Estados ativos
- Badges de sustentabilidade

### Rosa Suave (#EA9CAF)
- FAB
- Botões de ação
- Detalhes visuais

### Verde Escuro (#1E3309)
- Textos principais
- Ícones
- Headings

### Cinza Rosado (#F3EEF1)
- Background de cards soft
- Inputs
- Divisores

### Rosa Queimado (#D56989)
- CTAs secundários
- Links
- Highlights

---

## 📐 Especificações Técnicas

### Tipografia
```css
font-family: 'DM Sans', sans-serif;
h1: 32px / bold
h2: 24px / bold
h3: 18px / semibold
body: 16px / regular
small: 14px / regular
```

### Espaçamento
```css
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
```

### Bordas
```css
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 24px
```

---

## 🚀 Como Executar

```bash
npm install
npm run dev
```

Acesse: `http://localhost:5173`

---

## ✅ Checklist de Implementação

### Design System
- [x] Paleta de cores definida
- [x] Tipografia (DM Sans)
- [x] Componentes base (botões, cards, inputs)
- [x] Bottom navigation
- [x] Layout responsivo mobile-first

### Telas
- [x] Home (Dashboard)
- [x] Closet (Guarda-roupa)
- [x] IA Looks
- [x] Marketplace
- [x] Estatísticas
- [x] Perfil

### Funcionalidades
- [x] Navegação entre telas
- [x] Filtros por categoria
- [x] Tabs (marketplace)
- [x] Cards interativos
- [ ] Upload de imagens (próxima fase)
- [ ] IA real (próxima fase)

---

## 💡 Dicas de Apresentação

1. **Mostre primeiro o Home**: Apresenta o conceito geral
2. **Demonstre o Closet**: Mostra a digitalização
3. **Explore a IA**: Destaque a tecnologia
4. **Mostre Estatísticas**: Prova o valor (economia, uso)
5. **Finalize com Marketplace**: Sustentabilidade e comunidade

---

## 📱 Interações Principais

### Home → IA Looks
- Botão "Criar novo look com IA"
- Navegação via bottom nav

### Closet → Adicionar Peça
- FAB (+) abre modal/tela de upload

### Marketplace → Filtros
- Chips de filtro rápido
- Modal de filtros avançados

### Estatísticas → Vender Peça
- Botão em peças ociosas
- Redireciona para marketplace

---

_Documento de apoio para desenvolvimento e apresentação do Closetly_
