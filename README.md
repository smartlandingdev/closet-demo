# 👗 Closetly

> Seu guarda-roupa, infinitas possibilidades

**Closetly** é uma plataforma de digitalização de guarda-roupas com IA que combina tecnologia, moda e sustentabilidade. O app ajuda usuários a maximizar o uso de suas peças, criar looks incríveis e conectar-se com uma comunidade consciente.

![Version](https://img.shields.io/badge/version-1.0.0-green)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

---

## 🌟 Sobre o Projeto

Este é um **protótipo funcional** (wireframe interativo) desenvolvido para demonstrar o conceito visual e funcional do Closetly. O projeto utiliza React + Vite para criar uma experiência mobile-first com navegação fluida entre telas.

### ✨ Funcionalidades Demonstradas

- 🏠 **Home**: Dashboard personalizado com look do dia, agenda semanal e insights
- 👗 **Closet Digital**: Guarda-roupa virtual com categorização de peças
- ✨ **IA Looks**: Gerador de combinações inteligentes baseado em ocasião e clima
- 🛍️ **Marketplace Sustentável**: Brechó virtual para comprar/vender peças
- 📊 **Estatísticas**: Analytics de uso, custo por peça e impacto ambiental
- 👤 **Perfil**: Preferências de estilo, conquistas e configurações

---

## 🎨 Design System

### Paleta de Cores

```css
--color-spring-bud: #C2DC80;      /* Verde Claro - Sustentabilidade */
--color-charm-pink: #EA9CAF;      /* Rosa Suave - Modernidade */
--color-deep-forest: #1E3309;     /* Verde Escuro - Sofisticação */
--color-magnolia: #F3EEF1;        /* Cinza Rosado - Elegância */
--color-blush: #D56989;           /* Rosa Queimado - Energia */
```

### Tipografia

- **Fonte**: DM Sans (Google Fonts)
- **Estilo**: Minimalista, clean e legível
- **Pesos**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Componentes

- Botões arredondados (border-radius: 24px)
- Cards com sombra suave
- Bottom navigation fixa
- Floating Action Button (FAB)
- Badges e tags visuais

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repo]

# Navegue até a pasta
cd closet-demo

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

O app estará disponível em `http://localhost:5173`

---

## 📁 Estrutura do Projeto

```
closet-demo/
├── src/
│   ├── components/
│   │   └── BottomNav.jsx          # Navegação inferior
│   ├── pages/
│   │   ├── Home.jsx                # Dashboard principal
│   │   ├── Closet.jsx              # Guarda-roupa digital
│   │   ├── AILooks.jsx             # Gerador de looks IA
│   │   ├── Marketplace.jsx         # Brechó sustentável
│   │   ├── Statistics.jsx          # Estatísticas de uso
│   │   └── Profile.jsx             # Perfil do usuário
│   ├── App.jsx                     # Componente raiz
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Estilos globais
├── CONCEITO.md                     # Documento completo de conceito
├── package.json
└── README.md
```

---

## 📱 Navegação

### Bottom Navigation

- **🏠 Home**: Dashboard com resumo do dia
- **👗 Closet**: Guarda-roupa digital completo
- **✨ IA Looks**: Criador de combinações
- **🛍️ Brechó**: Marketplace circular
- **👤 Perfil**: Configurações e estatísticas

### Páginas Adicionais

- **📊 Estatísticas**: Acessível via botões contextuais (em desenvolvimento)

---

## 🎯 Público-Alvo

- **Faixa etária**: 16-35 anos
- **Interesses**: Moda, tecnologia, sustentabilidade
- **Dores**: Dificuldade em combinar peças, compras desnecessárias
- **Objetivos**: Aproveitar melhor o guarda-roupa, ser mais sustentável

---

## 💡 Próximos Passos (Roadmap)

### Fase 1 - MVP
- [x] Wireframes de todas as telas
- [x] Sistema de design implementado
- [ ] Integração com backend
- [ ] Upload real de imagens
- [ ] IA de categorização básica

### Fase 2 - Features Avançadas
- [ ] Algoritmo de geração de looks
- [ ] Try-on virtual (AR)
- [ ] Marketplace funcional
- [ ] Sistema de gamificação

### Fase 3 - Escala
- [ ] Feed social
- [ ] Integração com e-commerces
- [ ] Personal stylist IA com chat
- [ ] Assistente por voz

---

## 📚 Documentação Adicional

- **[CONCEITO.md](./CONCEITO.md)**: Documento completo de conceito visual, identidade de marca e estratégia
- Wireframes interativos disponíveis neste repositório
- Design system documentado no `index.css`

---

## 🛠️ Tecnologias Utilizadas

- **React 19**: Framework principal
- **Vite**: Build tool e dev server
- **CSS3**: Estilos customizados com variáveis CSS
- **Google Fonts**: Tipografia (DM Sans)

---

## 👥 Contribuição

Este é um projeto conceitual para demonstração. Para sugestões e melhorias:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é um protótipo conceitual desenvolvido para fins de demonstração.

---

## 📧 Contato

Para mais informações sobre o projeto Closetly, entre em contato.

---

<div align="center">

**Closetly** - Seu guarda-roupa, infinitas possibilidades 🌿

_Moda inteligente, escolhas conscientes_

</div>
