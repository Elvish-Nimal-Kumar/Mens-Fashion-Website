import React, { useState } from "react";
import "./EthnicWear.css";

import ethnic1 from "../Images/ethnicwear/ethnic1.jpg";
import ethnic2 from "../Images/ethnicwear/ethnic2.jpg";
import ethnic3 from "../Images/ethnicwear/ethnic3.jpg";
import ethnic4 from "../Images/ethnicwear/ethnic4.jpg";
import ethnic5 from "../Images/ethnicwear/ethnic5.jpg";
import ethnic6 from "../Images/ethnicwear/ethnic6.jpg";

function EthnicWear({ addToCart }) {

    const [sizes, setSizes] = useState({});

    const products = [
        {
            id: 1,
            name: "Traditional Kurta Set",
            price: 1999,
            image: ethnic1
        },
        {
            id: 2,
            name: "Wedding Sherwani",
            price: 4999,
            image: ethnic2
        },
        {
            id: 3,
            name: "Cotton Kurta",
            price: 1499,
            image: ethnic3
        },
        {
            id: 4,
            name: "Designer Kurta",
            price: 2499,
            image: ethnic4
        },
        {
            id: 5,
            name: "Festive Ethnic Wear",
            price: 2999,
            image: ethnic5
        },
        {
            id: 6,
            name: "Premium Sherwani",
            price: 5999,
            image: ethnic6
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
        <div className="container mt-5">

            <h2 className="section-title">
                Ethnic Wear Collection
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
                                    className="btn btn-dark w-100"
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

export default EthnicWear;