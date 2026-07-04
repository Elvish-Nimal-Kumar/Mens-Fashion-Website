import React, { useState } from "react";
import "./Shirts.css";

import shirt1 from "../Images/shirts/shirt1.jpg";
import shirt2 from "../Images/shirts/shirt2.jpg";
import shirt3 from "../Images/shirts/shirt3.jpg";
import shirt4 from "../Images/shirts/shirt4.jpg";
import shirt5 from "../Images/shirts/shirt5.jpg";
import shirt6 from "../Images/shirts/shirt6.jpg";

function Shirts({ addToCart }) {

    const [sizes, setSizes] = useState({});

    const products = [
        {
            id: 1,
            name: "Formal White Shirt",
            price: 1299,
            image: shirt1
        },
        {
            id: 2,
            name: "Black Slim Fit Shirt",
            price: 1499,
            image: shirt2
        },
        {
            id: 3,
            name: "Blue Denim Shirt",
            price: 1699,
            image: shirt3
        },
        {
            id: 4,
            name: "Casual Printed Shirt",
            price: 1399,
            image: shirt4
        },
        {
            id: 5,
            name: "Office Cotton Shirt",
            price: 1199,
            image: shirt5
        },
        {
            id: 6,
            name: "Premium Linen Shirt",
            price: 1899,
            image: shirt6
        }
    ];

    const handleAddToCart = (item) => {

        const selectedSize = sizes[item.id];

        if (!selectedSize) {
            alert("Please select a size");
            return;
        }

        addToCart({
            ...item,
            size: selectedSize,
            quantity: 1
        });

        alert(item.name + " added to cart");
    };

    return (
        <div 
            className="container mt-5"
            id="shirts"
        >

            <h2 className="section-title">
                Shirts Collection
            </h2>

            <div className="row">

                {products.map((item) => (

                    <div
                        className="col-lg-4 col-md-6 mb-4"
                        key={item.id}
                    >

                        <div className="product-card">

                            <img
                                src={item.image}
                                alt={item.name}
                                className="product-image"
                            />

                            <div className="card-body">

                                <h5>{item.name}</h5>

                                <h4>₹ {item.price}</h4>

                                <select
                                    className="form-select mb-3"
                                    onChange={(e) =>
                                        setSizes({
                                            ...sizes,
                                            [item.id]: e.target.value
                                        })
                                    }
                                >
                                    <option value="">
                                        Select Size
                                    </option>

                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>

                                <button
                                    className="btn btn-dark"
                                    onClick={() =>
                                        handleAddToCart(item)
                                    }
                                >
                                    Add To Cart
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Shirts;