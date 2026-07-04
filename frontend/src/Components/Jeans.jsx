import React, { useState } from "react";
import "./Jeans.css";

import jeans1 from "../Images/jeans/jeans1.jpg";
import jeans2 from "../Images/jeans/jeans2.jpg";
import jeans3 from "../Images/jeans/jeans3.jpg";
import jeans4 from "../Images/jeans/jeans4.jpg";
import jeans5 from "../Images/jeans/jeans5.jpg";
import jeans6 from "../Images/jeans/jeans6.jpg";

function Jeans({ addToCart }) {

    const [sizes, setSizes] = useState({});

    const products = [
        {
            id: 1,
            name: "Slim Fit Blue Jeans",
            price: 1799,
            image: jeans1
        },
        {
            id: 2,
            name: "Black Denim Jeans",
            price: 1899,
            image: jeans2
        },
        {
            id: 3,
            name: "Regular Fit Jeans",
            price: 1699,
            image: jeans3
        },
        {
            id: 4,
            name: "Distressed Jeans",
            price: 1999,
            image: jeans4
        },
        {
            id: 5,
            name: "Light Wash Jeans",
            price: 1599,
            image: jeans5
        },
        {
            id: 6,
            name: "Premium Stretch Jeans",
            price: 2199,
            image: jeans6
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
                Jeans Collection
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

                                    <option>28</option>
                                    <option>30</option>
                                    <option>32</option>
                                    <option>34</option>
                                    <option>36</option>
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

export default Jeans;