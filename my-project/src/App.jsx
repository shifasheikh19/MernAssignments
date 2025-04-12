import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";
import { ShoppingCart } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import ProductDetails from "./pages/ProductDetails";

import i1 from "./assets/i1.jpg";
import i2 from "./assets/i2.jpg";
import i3 from "./assets/i3.jpg";

const products = [
  { id: 1, name: "Realme Narzo 70 5g", price: "Rs. 60000", image: i1 },
  { id: 2, name: "HR Wireless Headphones", price: "Rs. 5000", image: i2 },
  { id: 3, name: "Apple MacBook Pro i7", price: "Rs. 99999", image: i3 },
];

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-md">
    <h1 className="text-xl font-bold">Habibi's Store</h1>
    <ul className="flex gap-4">
      <li><a href="#products" className="hover:underline">Products</a></li>
      <li><a href="#contact" className="hover:underline">Contact</a></li>
    </ul>
  </nav>
);

const Hero = () => (
  <section className="text-center py-5 bg-gradient-to-r from-teal-600 to-cyan-500 text-white">
    <h1 className="text-5xl font-bold">Welcome to Habibi's Store</h1>
    <p className="mt-4 text-lg">Your one-stop shop for the latest gadgets and accessories.</p>
  </section>
);

const ProductList = () => (
  <section id="products" className="py-3 text-center bg-gray-100">
    <h2 className="text-3xl font-bold mb-3 text-gray-800">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      {products.map((product) => (
        <Card key={product.id} className="p-8 shadow-lg bg-white rounded-lg">
          <img src={product.image} alt={product.name} className="w-full mb-3 rounded-md" />
          <CardContent>
            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
            <p className="text-lg text-blue-600 font-bold">{product.price}</p>
            <div className="flex gap-2 justify-center mt-4">
              <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                <ShoppingCart size={16} /> Add to Cart
              </Button>
              <Link to={`/product/${product.id}`}>
                <Button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
                  View
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-white text-center p-4 mt-10">
    <p>&copy; 2024 Tech Store. All rights reserved.</p>
    <div className="flex justify-center gap-4 mt-2">
      <a href="#" className="hover:text-gray-400"><Facebook size={24} /></a>
      <a href="#" className="hover:text-gray-400"><Twitter size={24} /></a>
      <a href="#" className="hover:text-gray-400"><Instagram size={24} /></a>
    </div>
  </footer>
);

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <ProductList />
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </Router>
);

export default App;
