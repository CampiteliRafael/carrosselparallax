# Carrossel Parallax do Aranhaverso (Spider-Verse Parallax Carousel)

## Descrição

Este projeto é uma aplicação web interativa construída com Next.js e React, apresentando um carrossel e uma galeria de personagens do universo Aranhaverso. Os usuários podem visualizar uma galeria de heróis, selecionar um para ver em detalhe, e navegar por um carrossel com informações e imagens de cada personagem. A estilização é feita com SCSS e CSS Modules, e a aplicação utiliza TypeScript para tipagem estática.

O projeto demonstra a criação de componentes reutilizáveis, manipulação de estado no lado do cliente, busca de dados de uma API interna (que serve um JSON local) e técnicas de layout responsivo com Flexbox/Grid.

## Funcionalidades

- **Galeria de Heróis:** Exibe todos os heróis disponíveis lado a lado em uma lista com rolagem horizontal.
- **Seleção de Herói:** Ao clicar em um herói na galeria, o usuário é direcionado para uma visualização detalhada.
- **Carrossel de Detalhes do Herói:**
  - Exibe a imagem e informações detalhadas do herói selecionado.
  - Botões de navegação "Próximo" e "Anterior" para ciclar entre os heróis.
  - Botão para "Voltar para Galeria".
  - Layout com imagem e detalhes posicionados lado a lado.
  - (Potencialmente) Tamanho da imagem influenciado pela altura do herói definida nos dados.
- **Dados Locais:** As informações dos heróis são carregadas de um arquivo JSON local servido através de uma API route do Next.js.
- **Estilização com SCSS:** Utilização de SCSS e CSS Modules para estilização modular e organizada.
- **Tipagem com TypeScript:** Código fonte totalmente tipado para maior robustez e manutenibilidade.

## Tecnologias Utilizadas

- **Next.js:** Framework React para renderização no lado do servidor (SSR), geração de sites estáticos (SSG), e funcionalidades de frontend e backend (App Router).
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **SCSS (Sass):** Pré-processador CSS para estilos mais poderosos e organizados (utilizado com CSS Modules).
- **Node.js:** Ambiente de execução para o Next.js (implícito).
- **HTML5 & CSS3:** Estrutura e estilização base.
- **ESLint / Prettier:** (Recomendado) Para linting e formatação de código.

## Configuração e Instalação

1.  **Clone o repositório (se aplicável):**
    ```bash
    git clone <url-do-seu-repositorio>
    cd <nome-do-projeto>
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis necessárias. Para este projeto, é importante ter `NEXT_PUBLIC_APP_URL` para o fetch de dados no lado do cliente em `page.tsx` (se a API for chamada com URL absoluta):
    ```env
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```
4.  **Verifique os dados e imagens:**
    - Certifique-se que o arquivo `src/data/heroes.json` está populado corretamente e que cada herói possui uma propriedade `imageUrl` apontando para o caminho correto dentro da pasta `public/` (ex: `"/spiders/nome-da-imagem.png"`).
    - As imagens referenciadas devem estar na pasta `public/spiders/`.

## Como Executar o Projeto

1.  Inicie o servidor de desenvolvimento Next.js:
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
2.  Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000).

## Como Funciona

A aplicação é centrada na `src/app/page.tsx`, que atua como um Client Component para gerenciar o estado da visualização e os dados dos heróis.

1.  **Busca de Dados:** Ao carregar, `page.tsx` faz uma requisição `Workspace` para o endpoint interno `/api/getHeroes`.
2.  **API Route:** A `src/app/api/getHeroes/route.ts` lê o arquivo `src/data/heroes.json` do sistema de arquivos e retorna seu conteúdo como JSON.
3.  **Estado da Visualização:** `page.tsx` mantém um estado (`viewMode`) para determinar se deve renderizar a galeria de heróis (`HeroGalleryGrid.tsx`) ou o carrossel de detalhes (`HeroesList.tsx`).
4.  **Galeria de Heróis (`HeroGalleryGrid.tsx`):**
    - Recebe a lista completa de heróis.
    - Renderiza cada herói lado a lado (com imagem e nome) em um layout com scroll horizontal.
    - Ao clicar em um herói, chama uma função em `page.tsx` que atualiza o `viewMode` para 'carousel' e define o índice do herói selecionado.
5.  **Carrossel de Detalhes (`HeroesList.tsx`):**
    - Recebe a lista completa de heróis e o índice inicial do herói selecionado.
    - Exibe a imagem (via `HeroPicture.tsx`) e os detalhes (via `HeroDetails.tsx`) do herói atual, posicionados lado a lado.
    - Possui botões "Próximo" e "Anterior" para navegar pela lista de heróis, atualizando o herói em destaque.
    - Inclui um botão "Voltar para Galeria" que altera o `viewMode` em `page.tsx` de volta para 'gallery'.
6.  **Estilização:** Os componentes são estilizados usando SCSS com CSS Modules, garantindo escopo local para os estilos e organização. Estilos globais e variáveis Sass são definidos em `globals.scss` e `variables.scss`.

## Habilidades Necessárias e Demonstradas

- **React (Avançado):** Hooks (`useState`, `useEffect`, `useMemo`), componentização, passagem de props, renderização condicional, manipulação de eventos.
- **Next.js (Intermediário/Avançado):** App Router, Client Components, Server Components (para a API route), API Routes, fetch de dados, gerenciamento de estado em páginas, build e desenvolvimento.
- **TypeScript (Intermediário):** Definição de interfaces, tipagem de props, estado, funções e dados.
- **JavaScript (ES6+):** Manipulação de arrays (`.map`), funções assíncronas (`async/await`), Promises, manipulação do DOM (implícita pelo React).
- **SCSS/Sass (Intermediário):** Variáveis, aninhamento, `@use`, BEM, CSS Modules.
- **CSS3 (Intermediário/Avançado):** Flexbox, Grid (se usado), posicionamento, responsividade (embora não tenhamos focado nisso, é uma habilidade relacionada).
- **HTML5 Semântico.**
- **Estrutura de Projetos Web:** Organização de pastas e arquivos.
- **Consumo de APIs:** Embora a API seja local, o padrão de `Workspace` é demonstrado.
- **Depuração (Debugging):** Uso do console do navegador e do servidor, inspeção de elementos, análise de erros.

## Melhorias Futuras

- **Implementação do Efeito Parallax:** Adicionar o efeito parallax visualmente atraente que dá nome ao projeto.
- **Animações e Transições:** Melhorar a experiência do usuário com animações suaves nas transições de slides do carrossel e na seleção de heróis.
- **Testes Unitários e de Integração:** Adicionar testes com Jest/React Testing Library para garantir a robustez dos componentes.
- **Responsividade Avançada:** Garantir que o layout se adapte perfeitamente a diferentes tamanhos de tela (mobile, tablet, desktop).
- **Otimização de Imagens:** Usar o componente `<Image>` do Next.js de forma mais otimizada para carregamento e performance das imagens.
- **Persistência de Estado:** Salvar o último herói visualizado ou o estado da galeria (ex: usando `localStorage` ou query params).
- **Internacionalização (i18n):** Se aplicável, adicionar suporte para múltiplos idiomas.
- **Acessibilidade (a11y):** Revisar e melhorar a acessibilidade, garantindo navegação por teclado, atributos ARIA corretos, etc.
- **Backend Real:** Substituir o JSON local por uma conexão a um banco de dados ou CMS.
- **Filtragem ou Busca na Galeria:** Permitir que o usuário filtre ou busque heróis na galeria.

---
