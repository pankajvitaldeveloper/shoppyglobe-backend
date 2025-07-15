ShoppyGlobe E-commerce API project. 

It includes:
Overview
Features
Technologies used
API endpoints
How to run the app
Testing instructions (with ThunderClient)
Example data for MongoDB

# 🛍️ ShoppyGlobe E-commerce API

A backend RESTful API built using **Node.js**, **Express.js**, and **MongoDB** for the ShoppyGlobe e-commerce platform. This API handles products, shopping cart, user authentication, and more.

---

## 🚀 Features

- User Registration & Login (JWT-based authentication)
- Product listing and details
- Cart management (Add, Update, Delete)
- MongoDB data 
- Input validation & error handling
- Protected routes for authenticated users only
- Tested with ThunderClient

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for Auth
- ThunderClient for testing

---

## 📁 Project Structure (MVC)

📦 shoppyglobe-backend/
┣ 📂controllers/
┣ 📂models/
┣ 📂routes/
┣ 📂middleware/
┣ 📂config/
┣ 📂screenshots/
┣ .env
┣ index.js / server.js
┣ README.md

---

## 📦 Installation

```bash
git clone https://github.com/pankajvitaldeveloper/shoppyglobe-backend.git
cd shoppyglobe-backend
npm install
Create a .env file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/shoppyglobe
JWT_SECRET=shoppyglobe_secret

🧪 API Endpoints
🔐 Auth
POST /register – Register a new user
🧪 Test User Registration
Endpoint: POST http://localhost:5000/register
Body (JSON):

{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}



POST /login – Login and receive JWT
🧪 Test Login
Endpoint: POST http://localhost:5000/login
Body (JSON)
{
  "email": "test@example.com",
  "password": "123456"
}

Expected Response:
{
  "token": "..."  // JWT token
}

📦 Products
GET /products – Get all products
🧪 Test GET All Products
Endpoint: GET http://localhost:5000/products


GET /products/:id – Get product by ID
🧪 Test GET Product by ID
Endpoint:
GET http://localhost:5000/products/<productId>


Replace <productId> with the actual _id of a product from your DB.


🛒 Cart (Protected)
POST /cart – Add item to cart
Test Protected Cart Routes
Set Authorization header:
Key: Authorization
Value: Bearer <your JWT token from login>


POST /cart – Add product to cart
{
  "productId": "PRODUCT_ID_HERE",
  "quantity": 2
}


PUT /cart/:id – Update quantity
PUT http://localhost:5000/cart/your_id
{
  "quantity": 4
}


DELETE /cart/:id – Remove item
DELETE http://localhost:5000/cart/your_id

🧪 ThunderClient Testing
Use ThunderClient or Postman:

Register → Get a user created

Login → Get JWT token

Use Bearer Token in all /cart routes:

Authorization: Bearer <your-token>
🧾 Sample Data (MongoDB Shell)
Run this to insert sample products:

use shoppyglobe

db.products.insertMany([
  {
    name: "Wireless Headphones",
    price: 2999,
    description: "High-quality wireless headphones with noise cancellation.",
    stock: 20
  },
  {
    name: "Smart Watch",
    price: 4999,
    description: "Water-resistant smart watch with fitness tracking.",
    stock: 15
  },
  {
    name: "Bluetooth Speaker",
    price: 1999,
    description: "Portable speaker with 10 hours of battery life.",
    stock: 30
  },
  {
    name: "USB-C Charging Cable",
    price: 299,
    description: "Durable 1.5 meter charging cable.",
    stock: 50
  },
  {
    name: "Gaming Mouse",
    price: 1499,
    description: "Ergonomic gaming mouse with RGB lighting.",
    stock: 25
  }
])


 Express API with MVC pattern

 MongoDB with Products & Cart collections

 JWT Authentication

 Route protection

 ThunderClient tested


## 🖼️ API Test Screenshots

📌 **Note**: All API test screenshots are available in the `screenshots/` folder for reference.  
These include tests for:
 