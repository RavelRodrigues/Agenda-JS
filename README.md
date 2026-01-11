# 📔 Agenda de Contatos - Fullstack JavaScript

Aplicação completa de agenda de contatos desenvolvida para consolidar conhecimentos em operações CRUD, autenticação de usuários, segurança em ambiente de produção e deploy em nuvem.

## 🚀 Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** MongoDB (via Mongoose)
- **Template Engine:** EJS (Embedded JavaScript)
- **Segurança:** Helmet, CSRF Protection (csurf), Express-Session
- **Frontend:** JavaScript (ES6+), Webpack, Babel, Bootstrap
- **Infraestrutura:** Google Cloud Platform (GCP), PM2, Nginx

## 🛠️ Desafios Técnicos & Aprendizados

Neste projeto, implementei soluções para problemas reais de desenvolvimento web:

- **Arquitetura MVC:** Separação clara entre Modelos (Mongoose), Visões (EJS) e Controladores (Lógica de negócio).
- **Segurança e Sessões:** Implementação de autenticação persistente com `express-session` e `connect-mongo`, além de proteção contra ataques CSRF.
- **Middlewares Globais:** Criação de filtros para tratamento de erros, mensagens de feedback (Flash Messages) e controle de acesso (Login Required).
- **Deploy em Produção:** Configuração de uma instância Linux no Google Cloud, utilizando **PM2** para gestão de processos e **Nginx** como Proxy Reverso.
- **Manipulação de DOM:** Validações de frontend assíncronas e tratamento de erros de execução com checagem de existência de elementos (Null Checks).

## ⚙️ Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/agenda-projeto.git
   ```

````

2. Instale as dependências:
```bash
npm install

````

3. Configure o arquivo .env:
   Crie um arquivo `.env` e adicione sua string de conexão do MongoDB:

```env
CONNECTIONSTRING=sua_uri_do_mongodb

```

4. Gere o bundle do frontend:

```bash
npm run build

```

5. Inicie o servidor:

```bash
npm start

```

---

## 👤 Autor

**Ravel Rodrigues Pereira** - Estudante de Sistemas de Informação

- [LinkedIn](https://www.linkedin.com/in/ravel-rodrigues-782499210/)
- [GitHub](https://github.com/RavelRodrigues)

```

```
