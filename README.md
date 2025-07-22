# Carrossel Parallax do Aranhaverso - Front-end Interativo

## Visão Geral

O Carrossel Parallax do Aranhaverso é um projeto front-end focado em criar uma experiência de usuário visualmente rica e interativa, inspirada no universo do Homem-Aranha. O projeto explora técnicas avançadas de animação, efeitos de parallax e componentização para entregar uma interface moderna e envolvente.

## Tecnologias Utilizadas

*   **Framework:** Next.js
*   **Biblioteca:** React
*   **Linguagem:** TypeScript
*   **Estilização:** SCSS/CSS Modules
*   **Otimização:** Next.js Image Optimization
*   **API:** API interna para consumo de dados

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

*   Node.js (versão 18 ou superior)
*   npm ou Yarn

### Configuração

1.  Clone o repositório:
    ```bash
    git clone https://github.com/CampiteliRafael/CarroselParalax.git
    cd CarroselParalax
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou yarn install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou yarn dev
    ```
4.  Acesse a aplicação em `http://localhost:3000`

## Decisões Técnicas e Arquitetura

*   **Next.js para Performance e SEO:** Escolha do Next.js para aproveitar suas funcionalidades de Server-Side Rendering (SSR) e Static Site Generation (SSG), garantindo melhor performance e otimização para motores de busca.
*   **SCSS Modules para Estilização:** Utilização de SCSS Modules para criar estilos componentizados e evitar conflitos de CSS, mantendo a organização e manutenibilidade do código.
*   **Componentização Avançada:** Criação de componentes React reutilizáveis e modulares, seguindo as melhores práticas de desenvolvimento front-end.
*   **TypeScript para Robustez:** Implementação do TypeScript para garantir tipagem estática, reduzindo erros em tempo de execução e melhorando a experiência de desenvolvimento.
*   **API Interna:** Desenvolvimento de uma API interna para fornecer dados dinâmicos ao carrossel, simulando um ambiente real de consumo de dados.

## Funcionalidades Principais

*   **Efeito Parallax:** Implementação de efeitos de parallax suaves e responsivos que criam uma sensação de profundidade e movimento.
*   **Carrossel Interativo:** Navegação fluida entre diferentes personagens e elementos do universo do Aranhaverso.
*   **Design Responsivo:** Interface totalmente responsiva que se adapta a diferentes tamanhos de tela e dispositivos.
*   **Animações Customizadas:** Animações CSS e JavaScript personalizadas para transições e interações do usuário.
*   **Otimização de Imagens:** Uso do sistema de otimização de imagens do Next.js para carregamento eficiente de assets visuais.

## Desafios e Soluções

O principal desafio deste projeto foi criar uma experiência de usuário visualmente rica e interativa sem comprometer a performance da aplicação.

**Solução:** Implementei técnicas de otimização como lazy loading de imagens, uso eficiente do Next.js Image component, e otimização de animações CSS para garantir que os efeitos visuais não impactassem negativamente a performance. Além disso, utilizei SCSS Modules para manter os estilos organizados e evitar conflitos, mesmo com a complexidade visual do projeto.

Outro desafio foi garantir que os efeitos de parallax funcionassem de forma suave em diferentes dispositivos e navegadores, o que exigiu testes extensivos e ajustes específicos para diferentes cenários de uso.

## Aprendizados Chave

*   **Next.js Avançado:** Aprofundamento nas funcionalidades do Next.js, incluindo otimização de imagens, SSR/SSG e roteamento dinâmico.
*   **SCSS Modules:** Domínio de técnicas avançadas de estilização com SCSS Modules para componentização e manutenção de estilos complexos.
*   **Performance em Aplicações Visuais:** Compreensão de como balancear elementos visuais ricos com performance otimizada, utilizando técnicas de lazy loading e otimização de assets.
*   **Experiência do Usuário (UX):** Desenvolvimento de habilidades em criar interfaces que não apenas funcionam bem tecnicamente, mas também proporcionam uma experiência envolvente e intuitiva para o usuário.
*   **Responsividade Avançada:** Implementação de design responsivo que mantém a qualidade visual e funcional em diferentes dispositivos e tamanhos de tela.

## Contribuições

Todas as contribuições foram realizadas por Rafael Campiteli.
