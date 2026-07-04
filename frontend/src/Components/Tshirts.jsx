import React, { useState } from "react";
import "./Tshirts.css";

import tshirt1 from "../Images/tshirts/tshirt1.jpg";
import tshirt2 from "../Images/tshirts/tshirt2.jpg";
import tshirt3 from "../Images/tshirts/tshirt3.jpg";
import tshirt4 from "../Images/tshirts/tshirt4.jpg";
import tshirt5 from "../Images/tshirts/tshirt5.jpg";
import tshirt6 from "../Images/tshirts/tshirt6.jpg";

function Tshirts({ addToCart }) {

    const [sizes, setSizes] = useState({});

    const products = [
        {
            id: 1,
            name: "Black Oversized T-Shirt",
            price: 799,
            image: tshirt1
        },
        {
            id: 2,
            name: "White Graphic T-Shirt",
            price: 899,
            image: tshirt2
        },
        {
            id: 3,
            name: "Polo T-Shirt",
            price: 999,
            image: tshirt3
        },
        {
            id: 4,
            name: "Sports T-Shirt",
            price: 749,
            image: tshirt4
        },
        {
            id: 5,
            name: "Casual Cotton T-Shirt",
            price: 699,
            image: tshirt5
        },
        {
            id: 6,
            name: "Premium Round Neck",
            price: 1099,
            image: tshirt6
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
                T-Shirts Collection
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

export default Tshirts;