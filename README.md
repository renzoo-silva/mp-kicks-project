# 👟 MP Kicks — Sneaker E-commerce

> A complete full-stack e-commerce platform for sneaker stores, featuring product catalog, shopping cart, order management, and payment integration.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

---

## 🛠️ Tech Stack

### Backend
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="50" height="50" title="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" width="50" height="50" title="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" width="50" height="50" title="Express"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain-wordmark.svg" width="50" height="50" title="PostgreSQL"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" width="50" height="50" title="Prisma"/>
</div>

### Frontend *(coming soon)*
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="50" height="50" title="React"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="50" height="50" title="Vite"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" width="50" height="50" title="Tailwind CSS"/>
</div>

### Tools
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="50" height="50" title="Git"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="50" height="50" title="GitHub"/>
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Author](#author)

---

## 📖 About

MP Kicks is a full-stack e-commerce application built for a sneaker store. The platform allows customers to browse products, create accounts, place orders, and make payments — all in one place.

This project was developed as a real-world application and also serves as a portfolio piece, covering the full development lifecycle from database modeling to frontend implementation.

---

## ✨ Features

- [x] Product catalog with variants (size, color, stock)
- [x] Multiple product photos
- [x] Product reviews and ratings
- [ ] Customer authentication (JWT)
- [ ] Shopping cart
- [ ] Order management
- [ ] Payment integration (Infinity Pay)
- [ ] Admin dashboard
- [ ] Saved addresses
- [ ] Saved payment methods

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v22.x or higher
- [PostgreSQL](https://www.postgresql.org/) v18.x or higher
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/renzoo-silva/mp-kicks-project.git
cd mp-kicks-project
```

**2. Install backend dependencies**
```bash
cd backend
npm install
```

**3. Configure environment variables**
```bash
# Create .env file inside /backend
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/mp_kicks"
JWT_SECRET="your_jwt_secret"
```

**4. Run database migrations**
```bash
node_modules\.bin\prisma migrate dev
```

**5. Start the development server**
```bash
npm run dev
```

The server will be running at `http://localhost:3000` 🚀

---

## 📡 API Endpoints

### Products
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/produtos` | List all products |
| `GET` | `/produtos/:id` | Get product by ID |
| `POST` | `/produtos` | Create product |
| `PUT` | `/produtos/:id` | Update product |
| `DELETE` | `/produtos/:id` | Delete product |

### Customers *(coming soon)*
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/clientes/register` | Register customer |
| `POST` | `/clientes/login` | Customer login |
| `GET` | `/clientes/:id` | Get customer profile |
| `PUT` | `/clientes/:id` | Update customer profile |

### Orders *(coming soon)*
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/pedidos` | Create order |
| `GET` | `/pedidos/:id` | Get order by ID |
| `PUT` | `/pedidos/:id/status` | Update order status |

---

## 🗄️ Database Schema

```
Produto          → ProdutoVariante  (1:N)
Produto          → FotoProduto      (1:N)
Produto          → Avaliacao        (1:N)
Cliente          → Pedido           (1:N)
Cliente          → Endereco         (1:N)
Cliente          → InfoCartao       (1:N)
Cliente          → Avaliacao        (1:N)
Pedido           → ItemPedido       (1:N)
Pedido           → Pagamento        (1:1)
Pedido           → Endereco         (N:1)
ProdutoVariante  → ItemPedido       (1:N)
```

---

## 👨‍💻 Author

**Renzo Soares Silva**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-renzoo--dev-blue?logo=linkedin)](https://www.linkedin.com/in/renzoo-dev)
[![GitHub](https://img.shields.io/badge/GitHub-renzoo--silva-black?logo=github)](https://github.com/renzoo-silva)
[![Email](https://img.shields.io/badge/Email-contato.renzodev%40gmail.com-red?logo=gmail)](mailto:contato.renzodev@gmail.com)

---

> *This project is part of my fullstack developer portfolio. Built with dedication and a lot of coffee ☕*
