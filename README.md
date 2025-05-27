# 🛍️ Product Management App

A full-stack product management application built with:

- 🚀 Backend: NestJS + MongoDB (deployed on Render)
- 💻 Frontend: React + TypeScript + Material UI (deployed on Vercel)
- 🔒 Authentication: JWT

---

## 🔧 Features

✅ User Signup & Login  
✅ JWT Authentication (secure routes)  
✅ Product CRUD: Create, Read, Delete  
✅ Responsive UI using Material UI  
✅ Axios with environment-based configuration  
✅ Deployed with CI/CD on Render + Vercel  

---

## 🗂️ Project Structure

```
/product-management-backend/     # NestJS backend
/product-management-frontend/    # React frontend
```

---

## 🚀 Backend Setup (NestJS + MongoDB)

### 1. Clone & Install

```bash
cd product-management-backend
npm install
```

### 2. Environment Variables

Create a file named `.env`:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

> Don't forget to whitelist Render IPs in MongoDB Atlas.

### 3. Run Locally

```bash
npm run start:dev
```

### 4. Deploy (Render)

- Create a new Web Service
- Connect GitHub repo
- Set environment variables in Render:
  - MONGODB_URI
  - JWT_SECRET
- Build Command:  
  ```
  npm install && npm install @nestjs/config && npm run build
  ```
- Start Command:  
  ```
  npm run start
  ```

---

## 💻 Frontend Setup (React + Vite + Material UI)

### 1. Clone & Install

```bash
cd product-management-frontend
npm install
```

### 2. Environment Variables

Create a file named `.env` in root:

```
REACT_APP_API_URL=https://your-backend.onrender.com
```

### 3. Run Locally

```bash
npm start
```

### 4. Deploy (Vercel)

- Connect to GitHub repo
- Set Environment Variable:
  - REACT_APP_API_URL = https://your-backend.onrender.com
- Build Command: `npm run build`
- Output Directory: `build`

---

## 🔐 API Endpoints

### Auth Routes

- `POST /auth/signup` — Register a new user
- `POST /auth/login` — Login with email & password (returns JWT)

### Product Routes (Protected)

- `GET /products` — List products
- `POST /products` — Add new product
- `DELETE /products/:id` — Delete product

Pass the token as a Bearer Token in headers:

```http
Authorization: Bearer <access_token>
```

---

## 📦 Tech Stack

| Layer      | Tech                          |
|------------|-------------------------------|
| Frontend   | React, TypeScript, Material UI|
| Backend    | NestJS, TypeScript, JWT       |
| Database   | MongoDB Atlas                 |
| Hosting    | Render (API), Vercel (Frontend)|
| Tools      | Axios, dotenv, bcrypt         |

---

## 🙌 Author

Made with ❤️ by Ayush Sandilya
