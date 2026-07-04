import React, { useState } from "react";
import "./Shorts.css";

import short1 from "../Images/shorts/short1.jpg";
import short2 from "../Images/shorts/short2.jpg";
import short3 from "../Images/shorts/short3.jpg";
import short4 from "../Images/shorts/short4.jpg";
import short5 from "../Images/shorts/short5.jpg";
import short6 from "../Images/shorts/short6.jpg";

function Shorts({ addToCart }) {

    const [sizes, setSizes] = useState({});

    const products = [
        {
            id: 1,
            name: "Cotton Casual Shorts",
            price: 699,
            image: short1
        },
        {
            id: 2,
            name: "Sports Running Shorts",
            price: 799,
            image: short2
        },
        {
            id: 3,
            name: "Denim Shorts",
            price: 899,
            image: short3
        },
        {
            id: 4,
            name: "Beach Shorts",
            price: 749,
            image: short4
        },
        {
            id: 5,
            name: "Cargo Shorts",
            price: 999,
            image: short5
        },
        {
            id: 6,
            name: "Premium Shorts",
            price: 1199,
            image: short6
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
                Shorts Collection
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

export default Shorts;