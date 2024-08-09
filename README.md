# Pizza Shop

Este é o projeto Pizza Shop, desenvolvido durante a trilha Ignite da Rocketseat. O objetivo deste projeto é criar uma página intuitiva e poderosa para que donos de restaurantes possam gerenciar eficientemente seus pedidos e acompanhar as principais métricas de desempenho do seu negócio.

## Funcionalidades principais:


### Autenticação

O Pizza Shop utiliza um sistema de autenticação por magic link, permitindo que os usuários se autentiquem sem a necessidade de uma senha.

### Implementação:

- Magic Link: Para realizar a autenticação, o sistema gera um magic link exclusivo para cada usuário. Este link, ao ser acessado, autentica o usuário automaticamente.

- Log do Link no Terminal: Como a API ainda não está configurada para enviar e-mails, o magic link é exibido diretamente no terminal do VS Code durante o desenvolvimento. Os desenvolvedores podem clicar no link para autenticar-se na aplicação.

### Fluxo de Autenticação:

- O usuário solicita a autenticação.
- Um magic link é gerado e exibido no terminal do VS Code.
- O desenvolvedor clica no link, que abrirá a aplicação no navegador e autenticará o usuário.

### Visualização de Métricas

A aplicação fornece uma visão abrangente das métricas mais relevantes para os donos de restaurantes, permitindo que eles monitorem o desempenho do seu negócio em tempo real. As principais métricas incluem:

1. Cancelamento de Pedidos Mensais: Visualize a taxa de cancelamento de pedidos ao longo do mês, permitindo identificar padrões e tomar ações corretivas.
2. Pedidos Diários: Monitore o número de pedidos recebidos diariamente, ajudando a entender os picos de demanda e a planejar recursos de acordo.
3. Receita Gerada no Mês: Acompanhe a receita mensal, permitindo uma análise financeira rápida e eficaz.
4. Outras Métricas: Estatísticas adicionais, monitoramento de status do pedido (Em preparo, processando, Pendente, Em entrega, Entregue) e itens populares.


## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/polaguilherme/pizza-shop.git


2. Navegue até o diretório do projeto:

    ```bash
    cd pizza-shop
    ```
    
3. Instale as dependências usando:

```bash 
  npm install

  # ou

  yarn install

  # ou 

  pnpm install
```
 ## Scripts Disponíveis

 No projeto, você pode rodar os seguintes scripts:

```bash
 `npm run dev`: Inicia o servidor de desenvolvimento utilizando Vite abrindo o localhost na porta 5173.
 `npm run test`: Executa os testes unitários utilizando Vitest.
 `npm run dev:test`: Executa o servidor de desenvolvimento em ambiente de teste
 ```

## Técnologias utilizados para o desenvolvimento do projeto

# React: Biblioteca principal para construir interfaces de usuário.
# React Router DOM: Biblioteca para controle de rotas na aplicação.
# React Hook Form: Gerenciamento de formulários de forma otimizada.
# TanStack React Query: Gerenciamento de estados assíncronos e cache de dados.
# TailwindCSS: Framework de CSS utilitário para estilização.
# Axios: Cliente HTTP para realizar requisições à API.
# Zod: Biblioteca para validação de schemas de dados.
# Radix UI: Componentes acessíveis e de alta qualidade para React.
# Playwright: Framework para automação de testes end-to-end.



