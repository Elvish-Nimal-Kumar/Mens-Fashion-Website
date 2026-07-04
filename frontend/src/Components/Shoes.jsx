import React, { useState } from "react";
import "./Shoes.css";

import shoe1 from "../Images/shoes/shoe1.jpg";
import shoe2 from "../Images/shoes/shoe2.jpg";
import shoe3 from "../Images/shoes/shoe3.jpg";
import shoe4 from "../Images/shoes/shoe4.jpg";
import shoe5 from "../Images/shoes/shoe5.jpg";
import shoe6 from "../Images/shoes/shoe6.jpg";

function Shoes({ addToCart }) {

    const [sizes, setSizes] = useState({});

    const products = [
        {
            id: 1,
            name: "Running Shoes",
            price: 2499,
            image: shoe1
        },
        {
            id: 2,
            name: "Casual Sneakers",
            price: 2999,
            image: shoe2
        },
        {
            id: 3,
            name: "Formal Shoes",
            price: 3499,
            image: shoe3
        },
        {
            id: 4,
            name: "Loafers",
            price: 3999,
            image: shoe4
        },
        {
            id: 5,
            name: "Gym Training Shoes",
            price: 2799,
            image: shoe5
        },
        {
            id: 6,
            name: "Premium Leather Shoes",
            price: 4999,
            image: shoe6
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
                Shoes Collection
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

                                <h5>
                                    {item.name}
                                </h5>

                                <h4>
                                    ₹ {item.price}
                                </h4>

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

                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
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

export default Shoes;