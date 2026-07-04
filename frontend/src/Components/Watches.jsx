import React from "react";
import "./Watches.css";

import watch1 from "../Images/watches/watch1.jpg";
import watch2 from "../Images/watches/watch2.jpg";
import watch3 from "../Images/watches/watch3.jpg";
import watch4 from "../Images/watches/watch4.jpg";
import watch5 from "../Images/watches/watch5.jpg";
import watch6 from "../Images/watches/watch6.jpg";

function Watches({ addToCart }) {

    const products = [
        {
            id: 1,
            name: "Analog Watch",
            price: 2499,
            image: watch1
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 3999,
            image: watch2
        },
        {
            id: 3,
            name: "Luxury Watch",
            price: 1999,
            image: watch3
        },
        {
            id: 4,
            name: "Sports Watch",
            price: 4999,
            image: watch4
        },
        {
            id: 5,
            name: "Casual Watch",
            price: 5999,
            image: watch5
        },
        {
            id: 6,
            name: "Premium Watch",
            price: 3499,
            image: watch6
        }
    ];

    const handleAddToCart = (item) => {

        addToCart({
            ...item,
            quantity: 1
        });

        alert(item.name + " added to cart");
    };

    return (
        <div className="container mt-5">

            <h2 className="section-title">
                Watches Collection
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

export default Watches;