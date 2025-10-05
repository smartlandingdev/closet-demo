# Closetly - Conceito Visual e Funcional

## 📱 Sobre o App

**Closetly** é uma plataforma de digitalização de guarda-roupas com IA que combina tecnologia, moda e sustentabilidade. O app ajuda usuários a maximizar o uso de suas peças, criar looks incríveis e conectar-se com uma comunidade consciente.

---

## 🎨 Identidade Visual

### Paleta de Cores

```
#C2DC80 - Verde Claro (Spring Bud)       → Sustentabilidade, frescor, renovação
#EA9CAF - Rosa Suave (Charm Pink)        → Modernidade, suavidade, feminilidade
#1E3309 - Verde Escuro (Deep Forest)     → Sofisticação, estabilidade, natureza
#F3EEF1 - Cinza Rosado (Magnolia)        → Elegância, minimalismo, leveza
#D56989 - Rosa Queimado (Blush)          → Energia, calor, personalidade
```

### Princípios de Design

- **Minimalismo moderno**: espaços em branco generosos, hierarquia clara
- **Tipografia leve**: Sans-serif moderna (sugestões: Inter, DM Sans, Poppins)
- **Bordas arredondadas**: 12-16px para cards, 24-32px para botões
- **Sombras suaves**: `box-shadow: 0 4px 12px rgba(30, 51, 9, 0.08)`
- **Ícones**: Line icons minimalistas (Lucide, Feather, Phosphor)

---

## 💬 Tom de Voz

**Amigável · Sustentável · Empoderador · Leve**

Closetly fala como uma amiga que entende de moda e meio ambiente. A comunicação é:

- **Positiva**: "Você tem 24 looks ainda não explorados!" em vez de "Você só usou 30% do guarda-roupa"
- **Inclusiva**: "Seu estilo, suas regras"
- **Consciente**: Foco em sustentabilidade sem ser moralista
- **Inspiradora**: Celebra a criatividade e a autenticidade

**Exemplos de microtextos:**
- Botão de upload: "Adicionar peça"
- Empty state: "Seu guarda-roupa digital começa aqui ✨"
- Estatísticas: "Sua peça mais amada este mês"
- Brechó: "Dê uma nova vida às suas peças"

---

## 🌟 Naming & Slogan

### Nome Principal
**Closetly**
_Do inglês "closet" (guarda-roupa) + sufixo "ly" (moderno, próximo, amigável)_

### Alternativas
1. **Wardobe** (Wardrobe + Robe = visual e funcional)
2. **Reveste** (Re-veste = vestir novamente, reuso)
3. **Stylo** (Style + Flow = fluidez no estilo)
4. **Outfitly** (Outfit + ly = looks no dia a dia)

### Slogans
- **Principal**: _"Seu guarda-roupa, infinitas possibilidades"_
- Alternativa 1: _"Vista-se consciente, vista-se bem"_
- Alternativa 2: _"Redescubra seu estilo"_
- Alternativa 3: _"Moda inteligente, escolhas conscientes"_

---

## 📝 Descrição para App Store

**Título**: Closetly - Guarda-Roupa com IA

**Descrição Curta** (80 caracteres):
Digitalize seu closet, crie looks com IA e vista-se de forma sustentável

**Descrição Completa**:

Descubra o futuro da moda pessoal com Closetly!

Transforme seu guarda-roupa físico em digital e tenha todo o seu acervo de roupas na palma da mão. Com inteligência artificial avançada, o Closetly ajuda você a:

✨ **Digitalizar seu closet**: Fotografe suas peças e deixe a IA categorizar automaticamente
👗 **Criar looks incríveis**: Receba sugestões personalizadas baseadas em clima, ocasião e seu estilo
🪞 **Experimentar virtualmente**: Teste combinações antes de vestir
📊 **Entender seu uso**: Veja estatísticas sobre custo por uso, peças favoritas e ociosas
📅 **Planejar sua semana**: Monte looks com antecedência e nunca mais perca tempo de manhã
♻️ **Moda circular**: Conecte-se a brechós para comprar, vender ou doar peças de forma sustentável

**Para quem é o Closetly?**
- Pessoas criativas que querem explorar melhor o que já têm
- Quem busca praticidade no dia a dia
- Entusiastas de moda sustentável
- Qualquer pessoa que já perguntou "não tenho nada pra vestir" olhando um closet cheio

Baixe agora e redescubra seu estilo! 🌿

---

## 🎯 Público-Alvo

**Persona Principal**: Ana, 24 anos
- Trabalha em startup de tecnologia (home office/híbrido)
- Gosta de moda mas tem dificuldade em combinar peças
- Preocupada com sustentabilidade
- Ativa em redes sociais (Instagram, TikTok)
- Compra em brechós e quer vender peças que não usa mais
- Usa apps de produtividade (Notion, Google Calendar)

**Dores**:
- "Não sei combinar as peças que tenho"
- "Compro coisas que não uso"
- "Perco tempo toda manhã escolhendo roupa"
- "Quero ser mais sustentável mas não sei como"

**Desejos**:
- Aproveitar melhor o guarda-roupa
- Ter um estilo mais definido
- Economizar tempo e dinheiro
- Contribuir para moda circular

---

## 🧩 Arquitetura de Informação

### Navegação Principal (Bottom Tab)

1. **🏠 Home**: Resumo diário, look do dia, clima, agenda
2. **👗 Closet**: Guarda-roupa digital organizado por categoria
3. **✨ IA Looks**: Gerador de combinações inteligentes
4. **🛍️ Brechó**: Marketplace circular (comprar/vender/doar)
5. **👤 Perfil**: Estatísticas, configurações, preferências

---

## 📱 Wireframes - Descrição das Telas

### 1. Home (Dashboard)
**Elementos**:
- Header: Saudação personalizada + data e clima atual
- Card destaque: "Look sugerido para hoje" (visual do look + botão "Usar")
- Seção "Sua semana": Calendário horizontal com looks planejados
- Insights rápidos: "3 peças sem uso há 2 meses" (link para estatísticas)
- CTA: "Criar novo look com IA"

### 2. Closet (Guarda-Roupa Digital)
**Elementos**:
- Filtros superiores: Categorias (Tops, Bottoms, Shoes, Accessories)
- Grid de cards com fotos das peças
- Botão flutuante: "+" para adicionar nova peça
- Cada card mostra: foto, nome/marca opcional, tags de cor/estação
- Ação de long-press: Editar, deletar, marcar como favorito

### 3. IA Looks (Gerador de Combinações)
**Elementos**:
- Filtros contextuais: Ocasião (casual, trabalho, festa), Clima, Cores
- Área central: Preview do look (3-5 peças combinadas)
- Botões de ação: "♡ Salvar", "🔄 Gerar outro", "📅 Agendar"
- Swipe horizontal para navegar entre sugestões
- Opção "Try-On" para teste virtual

### 4. Brechó (Marketplace)
**Elementos**:
- Tabs: "Explorar", "Minhas vendas", "Favoritos"
- Cards de produtos com foto, preço, localização
- Filtros: Tamanho, preço, categoria, distância
- Badge de "sustentabilidade": Kg de CO2 economizado
- Sistema de mensagens integrado

### 5. Estatísticas
**Elementos**:
- KPIs principais: Total de peças, custo médio por uso, taxa de uso
- Gráficos:
  - Peças mais usadas (top 5)
  - Cores mais presentes no closet
  - Uso por categoria (pizza chart)
- Insights: "Você economizou R$ 350 este mês reutilizando peças"
- Lista de peças ociosas (+ de 90 dias sem uso) com CTA para brechó

### 6. Perfil
**Elementos**:
- Foto + nome + bio
- Preferências de estilo (tags visuais)
- Configurações de clima/localização
- Integrações (calendário, redes sociais)
- Sobre o app + suporte

---

## 🎨 Componentes de Design

### Botões
- **Primário**: Fundo #C2DC80, texto #1E3309, border-radius 24px
- **Secundário**: Outline #D56989, texto #D56989, border-radius 24px
- **Floating Action**: Circular, fundo #EA9CAF, ícone branco

### Cards
- Fundo: #F3EEF1 ou branco
- Borda: 16px radius
- Sombra: `0 4px 12px rgba(30, 51, 9, 0.08)`
- Padding interno: 16-24px

### Tipografia
- **Headings**: DM Sans Bold, cor #1E3309
- **Body**: DM Sans Regular, cor #1E3309 (alpha 0.8)
- **Labels**: DM Sans Medium, 12-14px
- **Hierarchy**: 32px (h1), 24px (h2), 18px (h3), 16px (body), 14px (small)

### Ícones
- Estilo: Line icons com stroke de 2px
- Cor base: #1E3309
- Cor ativa: #C2DC80 ou #D56989

---

## 🚀 Diferenciais Competitivos

**vs. Whering**:
- Interface mais minimalista e brasileira
- Foco em marketplace local de brechós
- Onboarding mais rápido com IA

**vs. GetWardrobe**:
- Gamificação de sustentabilidade (badges, impacto ambiental)
- Comunidade social (compartilhar looks, inspirações)
- Try-on virtual mais avançado

---

## 💡 Features Futuras (Roadmap)

**Fase 1 (MVP)**:
- Digitalização manual + categorização IA
- Gerador básico de looks
- Agenda semanal
- Estatísticas simples

**Fase 2**:
- Marketplace de brechós
- Try-on virtual (AR)
- Gamificação (badges, challenges)

**Fase 3**:
- Social feed (compartilhar looks)
- Integração com e-commerces
- Personal stylist IA com chat
- Assistente por voz

---

## 📊 Métricas de Sucesso

- **Engajamento**: Usuários criam 3+ looks por semana
- **Retenção**: 60% dos usuários ativos após 30 dias
- **Impacto**: Redução de 30% em compras desnecessárias
- **Circular Economy**: 40% dos usuários usam marketplace no primeiro mês
- **Satisfação**: NPS acima de 50

---

_Documento criado para guiar o desenvolvimento do MVP do Closetly_
_Versão 1.0 - Outubro 2025_
