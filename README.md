
# NAWAITER - Dashboard
O Nawaiter é uma ferramenta incrível para otimizar a gestão de pedidos em restaurantes. Com ele, nós podemos facilmente criar, editar e remover usuários, mesas, categorias e produtos. O destaque é o dashboard em tempo real atualizados com os pedidos. Além disso, há uma seção para pedidos em aberto, podendo realizar o fechamento das ordens, e outra para o histórico completo de pedidos já realizados.








## Backend do dashboard

Para uma experiência completa e eficiente, o Nawaiter depende de um backend:

[NAWAITER-BACKEND](https://github.com/nivaldoandrade/nawaiter-api-nodejs)




## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/nivaldoandrade/nawaiter-frontend-reactjs
```

Entre no diretório do projeto

```bash
  cd nawaiter-frontend-reactjs
```

Instale as dependências

```bash
  yarn 
  ou
  npm install
```

Crie .env.local

```bash
 cp .env.example .env.local
```
Se o ambiente não for Linux/Mac, basta duplicar o arquivo **.env.example** e renomeá-lo para **.env.local**.

Não esqueça de alterar o **VITE_API_URL** dentro do .env.local com a URL do backend.

Inicie o servidor

```bash
  yarn dev
  ou
  npm run dev
```


## Roadmap

- Melhorias na navegação no calendário;

- Parte de cancelamento de pedido;

- Melhorar e adicionar filtros em todas as tabelas;

- Alterar a unidade PX para REM.


## Stack utilizada

- Vite;
- ReactJS;
- React Hook Form;
- React Query;
- Axios;
- Dayjs;
- Jwt-decode;
- Polished;
- React Loading Skeleton;
- Socket IO;
- Styled Components;
- Zod;

