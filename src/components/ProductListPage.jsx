import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Lipstick",
        price: 50,
        quantity: 100,
        image: "https://media.istockphoto.com/id/164505409/photo/red-lipstick.jpg?s=612x612&w=0&k=20&c=dnZ2e8AC3qH8FVStYzo-3MuU1XIXk-8xy63Hm-DhXbg=",
        description: "Red Lipstick"
    },
    {
        id: 2,
        name: "Perfume",
        price: 300,
        quantity: 7,
        image: "https://media.istockphoto.com/id/164505409/photo/red-lipstick.jpg?s=612x612&w=0&k=20&c=dnZ2e8AC3qH8FVStYzo-3MuU1XIXk-8xy63Hm-DhXbg=",
        description: "Jasmine Perfume"
    },
    {
        id: 3,
        name: "Eye shadow",
        price: 100,
        quantity: 5,
        image: "https://media.istockphoto.com/id/164505409/photo/red-lipstick.jpg?s=612x612&w=0&k=20&c=dnZ2e8AC3qH8FVStYzo-3MuU1XIXk-8xy63Hm-DhXbg=",
        description: "Black eye shadow"
    },
    {
        id: 4,
        name: "Eyeliner",
        price: 80,
        quantity: 2,
        image: "https://media.istockphoto.com/id/164505409/photo/red-lipstick.jpg?s=612x612&w=0&k=20&c=dnZ2e8AC3qH8FVStYzo-3MuU1XIXk-8xy63Hm-DhXbg=",
        description: "Black eye liner"
    },
];

const ProductListPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div>
            <h1>Makeup Product List</h1>

            <input 
                type="text" 
                placeholder="Search Makeup products" 
                value={searchQuery}
                onChange={handleSearchChange} 
            />

            <div className="product-list">
                {filteredProducts.map((product) => (
                    <div className="card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>Price: {product.price} $</p>
                            <p>Quantity: {product.quantity} kg</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;
