import React, { useState } from "react";
import "./TrackPants.css";

import track1 from "../Images/trackpants/track1.jpg";
import track2 from "../Images/trackpants/track2.jpg";
import track3 from "../Images/trackpants/track3.jpg";
import track4 from "../Images/trackpants/track4.jpg";
import track5 from "../Images/trackpants/track5.jpg";
import track6 from "../Images/trackpants/track6.jpg";

function TrackPants({ addToCart }) {

    const [sizes, setSizes] = useState({});

    const products = [
        {
            id: 1,
            name: "Sports Track Pant",
            price: 999,
            image: track1
        },
        {
            id: 2,
            name: "Jogger Track Pant",
            price: 1199,
            image: track2
        },
        {
            id: 3,
            name: "Cotton Track Pant",
            price: 899,
            image: track3
        },
        {
            id: 4,
            name: "Gym Track Pant",
            price: 1299,
            image: track4
        },
        {
            id: 5,
            name: "Slim Fit Track Pant",
            price: 1099,
            image: track5
        },
        {
            id: 6,
            name: "Premium Track Pant",
            price: 1499,
            image: track6
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
                Track Pants Collection
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

export default TrackPants;