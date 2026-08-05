# 💡 FinanSolo: Seu Educador Financeiro Inteligente 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-FF4B4B?style=for-the-badge&logo=lucide&logoColor=white)

O **FinanSolo** é uma aplicação web interativa desenvolvida para trabalhadores **CLT que moram sozinhos** e querem fechar o mês no azul para conquistar a sonhada viagem de férias, sem precisar recorrer a planilhas chatas ou termos financeiros complicados.

---

## 🎯 Sobre o Projeto

Criado do zero a partir de prompts focados em educação financeira digital amigável, o sistema traduz conceitos complexos para o português do cotidiano. Ele utiliza a **Inteligência Artificial (Simulada via Lógica React)** para oferecer dicas personalizadas, calcular meses restantes para a viagem dos sonhos e gerar alertas de gastos excessivos (ex: comparar um delivery caro com dias de viagem).

## 🚀 Principais Funcionalidades

- **🚦 Semáforo do Mês (Regra 50/30/20 Adaptada)**: Painel interativo separando o salário líquido em "Contas Fixas", "Vida Livre" e "Viagem". Visualização em tempo real das barras de limite de gastos.
- **✈️ Simulador da Viagem dos Sonhos**: Controle deslizante (slider) interativo onde o usuário ajusta seu aporte mensal e vê a data do embarque se aproximar. Possui o inovador **Modo Turbo**, que simula o corte de pequenos luxos (ex: streamings, delivery) para adiantar a viagem.
- **⚠️ Alertas Inteligentes de Despesas**: Mostra comparações reais (ex: "Seu gasto com app de comida equivale a 2 diárias num hotel"). O usuário pode aplicar a dica com um clique e reverter o valor direto para a caixinha da viagem.
- **🧠 Dicas Personalizadas**: Sugestões baseadas no perfil CLT Solo ("Efeito 5º Dia Útil", "Como usar o 13º salário").
- **💊 Pílulas de Aprendizado**: Conceitos financeiros complexos explicados em 30 segundos, sem "economiquês".
- **⚙️ Personalização em Tempo Real**: Permite alterar Renda Líquida CLT, Idade, Custos da Viagem e ver todos os painéis e cálculos se adaptarem imediatamente.

## 🎨 Design & UI/UX

- **Dark Mode Premium:** Paleta de cores em tons de Obsidiana (`#090D16`), Verde Esmeralda (`#10B981`) para economia e Índigo/Azul Cibernético para metas de viagem.
- **Glassmorphism:** Efeito de "vidro fosco" translúcido em todos os componentes para um visual moderno e limpo.
- **Micro-interações:** Botões com efeitos de *glow* e sliders animados suavemente.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js instalado.

### Passos
1. Abra o terminal na pasta do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador no link fornecido (geralmente `http://localhost:5173/`).

---

## 📂 Estrutura de Arquivos Principal

```text
/src
  /assets           # Imagens e ícones
  /components       # Componentes modulares (Navbar, DashboardCards, TripSimulator, etc.)
  /data             # Arquivo defaultData.js com base de dados simulada e perfil do usuário
  App.jsx           # Hub principal reunindo todos os componentes e estados (React hooks)
  index.css         # Design system com variáveis CSS, responsividade e Glassmorphism
```

---

## 💬 Prompts Utilizados na Criação

O projeto foi inteiramente idealizado a partir das diretrizes passadas via IA. Abaixo estão os **prompts exatos** utilizados pelo usuário para a geração:

### 📝 Prompt 1: Idealização do Produto & Requisitos
> "Crie a ideia de um Educador Financeiro Inteligente voltado para Trabalhador CLT solo. O principal problema dessa pessoa é gastar mais do que ganha. A solução deve ajudar o usuário a organizar gastos e criar metas simples de economia. O sistema deve se comunicar de forma clara, amigável e prática.
> 
> O Educador Financeiro Inteligente deve possuir os seguintes recursos:
> 1. Controle simples de gastos mensais
> 2. Simulação de metas de economia
> 3. Dicas personalizadas de acordo com o perfil do usuário
> 
> A IA deve adaptar as recomendações com base em renda mensal, idade e objetivos financeiros. Evite respostas técnicas ou difíceis para iniciantes. As sugestões devem ser apresentadas no formato de listas curtas e exemplos práticos.
> 
> Atue como um especialista em educação financeira digital. Crie a proposta de um Educador Financeiro Inteligente para pessoas que moram sozinhas e quer fazer uma viagem. O sistema deve ajudar o usuário a controlar gastos, criar metas de economia e aprender conceitos básicos de finanças.
> 
> As principais funcionalidades devem incluir:
> - Painel simples de gastos
> - Alertas de despesas exageradas
> - Recomendações personalizadas de economia
> 
> A comunicação deve ser amigável e objetiva. As respostas devem seguir o formato de listas práticas e exemplos do cotidiano. Evite termos técnicos difíceis e respostas genéricas. Ao final, apresente sugestões criativas para transformar essa ideia em um projeto frontend interativo."

### 📝 Prompt 2: Escolha de Stack / Tecnologia
> "gostaria que fizesse utilizando React vite"


Link do Vercel: educador-financeiro-finan-solo.vercel.app

---
*Feito com ❤️ por Antigravity IDE e Karina Sudati.*
