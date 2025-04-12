import React from "react";
import { useParams, Link } from "react-router-dom";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";

const products = [
  { id: 1, name: "Realme Narzo 70 5g", price: "Rs. 60000", image: i1, description: "Realme Narzo 70 5g (forest Green, 128 Gb, 5000 Mah)." },
  { id: 2, name: "HR Wireless Headphones", price: "Rs. 5000", image: i2, description: "Noise Two Wireless On-Ear Headphones with 50 Hours Playtime, Low Latency(up to 40ms), 4 Play Modes, Dual Pairing, BT v5.3 (Bold Black)." },
  { id: 3, name: "Apple MacBook Pro i7", price: "Rs. 99999", image: i3, description: "Apple MacBook Pro i7 2015 15-inch 16/256GB - Silver." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-2xl text-red-600">Product not found</h2>;
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-60 h-60 object-cover mb-4 rounded-lg" />
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl text-blue-600 font-bold">{product.price}</p>
      <Link to="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
