# 👔 MERN Men's Fashion Website

A modern full-stack **Men's Fashion E-Commerce Website** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This application allows users to browse fashion products, add items to the cart, place orders, and send customer inquiries through a contact form. All orders and messages are securely stored in MongoDB Atlas.

---

## 🚀 Features

### Frontend Features
- Responsive Navigation Bar
- Product Categories:
  - Shirts
  - T-Shirts
  - Jeans
  - Ethnic Wear
  - Track Pants
  - Shorts
  - Watches
  - Shoes
- Product Cards with Images
- Add to Cart Functionality
- Quantity Increase/Decrease
- Remove from Cart
- Order Summary
- Buy Now Section
- FAQ Page
- Create Account Page
- Sign In Page
- Contact Us Form
- Responsive Footer

### Backend Features
- REST API using Express.js
- MongoDB Atlas Integration
- Order Management
- Customer Message Storage
- CORS Support
- Environment Variable Configuration

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Bootstrap
- React Bootstrap
- React Router DOM
- React Icons
- React Slick
- Slick Carousel
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv
- Nodemon

---

## 📁 Project Structure

```text
Mens-Fashion-Website/

├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   ├── Images/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🗄️ MongoDB Collections

The project uses the following MongoDB Atlas collections:

- orders
- complaints

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/MERN-Mens-Fashion-Website.git
cd MERN-Mens-Fashion-Website
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run the backend server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🛒 Order Flow

```text
Browse Products
        ↓
Add To Cart
        ↓
Update Quantity
        ↓
Enter Customer Details
        ↓
Place Order
        ↓
Express API
        ↓
MongoDB Atlas
```

---

## 📩 Contact Flow

```text
Enter Name
        ↓
Enter Email
        ↓
Enter Message
        ↓
Submit
        ↓
Express API
        ↓
MongoDB Atlas
```

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Product Categories
- Shopping Cart
- Order Form
- Contact Us
- MongoDB Atlas Collections

---

## 🔮 Future Enhancements

- User Authentication
- Admin Dashboard
- Order History
- Payment Gateway Integration
- Search Functionality
- Product Filters
- Wishlist
- Order Tracking

---

## 👨‍💻 Author

**Elvish Nimal Kumar**

---

## 📜 License

This project is developed for educational and portfolio purposes.