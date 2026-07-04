import axios from "axios";
import React, { useState } from "react";
import "./Cart.css";

function Cart({
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty
}) {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [payment, setPayment] = useState("");

    const totalPrice = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const placeOrder = async () => {

    if (
        !name ||
        !address ||
        !payment
    ) {
        alert("Please fill all details");
        return;
    }

    try {

        const orderData = {

            customerName: name,

            address: address,

            paymentMethod: payment,

            items: cart,

            totalPrice: totalPrice
        };

        console.log(
            "Sending Order:",
            orderData
        );

        const response =
            await axios.post(
                "http://localhost:5000/api/orders",
                orderData,
                {
                    headers: {
                        "Content-Type":
                            "application/json"
                    }
                }
            );

        console.log(
            "Response:",
            response.data
        );

        alert(
            response.data.message
        );

        setName("");
        setAddress("");
        setPayment("");

        // Optional:
        // clear cart here if you have a function

    } catch (error) {

        console.log(
            "FULL ERROR:",
            error
        );

        if (error.response) {

            console.log(
                "SERVER RESPONSE:",
                error.response.data
            );

            alert(
                JSON.stringify(
                    error.response.data
                )
            );

        } else if (error.request) {

            console.log(
                "NO RESPONSE:",
                error.request
            );

            alert(
                "Server not responding"
            );

        } else {

            console.log(
                "ERROR:",
                error.message
            );

            alert(
                error.message
            );
        }
    }
};
    return (

        <div className="container mt-5">

            <h1 className="text-center mb-5">
                Shopping Cart
            </h1>

            {cart.length === 0 ? (

                <h3 className="text-center">
                    Your Cart Is Empty
                </h3>

            ) : (

                <>

                    {cart.map((item, index) => (

                        <div
                            className="card mb-4 p-4"
                            key={index}
                        >

                            <div className="row align-items-center">

                                {/* Product Image */}
                                <div className="col-md-2">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="img-fluid rounded"
                                        style={{
                                            height: "120px",
                                            objectFit: "cover"
                                        }}
                                    />

                                </div>

                                {/* Product Details */}
                                <div className="col-md-4">

                                    <h4>
                                        {item.name}
                                    </h4>

                                    <p>
                                        <b>Size:</b>{" "}
                                        {item.size}
                                    </p>

                                    <p>
                                        <b>Quantity:</b>
                                    </p>

                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px"
                                        }}
                                    >

                                        <button
                                            className="btn btn-secondary"
                                            onClick={() =>
                                                decreaseQty(index)
                                            }
                                        >
                                            -
                                        </button>

                                        <span
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {item.quantity}
                                        </span>

                                        <button
                                            className="btn btn-secondary"
                                            onClick={() =>
                                                increaseQty(index)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                                {/* Single Price */}
                                <div className="col-md-2">

                                    <h5>
                                        ₹ {item.price}
                                    </h5>

                                </div>

                                {/* Total Price */}
                                <div className="col-md-2">

                                    <h5>
                                        ₹ {item.price * item.quantity}
                                    </h5>

                                </div>

                                {/* Remove Button */}
                                <div className="col-md-2">

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            removeFromCart(index)
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                    {/* Order Details */}
                    <div className="card p-4 mt-5">

                        <h3 className="mb-4">
                            Order Details
                        </h3>

                        <h4>
                            Total Amount :
                            ₹ {totalPrice}
                        </h4>

                        <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="Enter Full Name"
                            value={name}
                            onChange={(e) =>
                                setName(
                                    e.target.value
                                )
                            }
                        />

                        <textarea
                            className="form-control mt-3"
                            rows="3"
                            placeholder="Enter Address"
                            value={address}
                            onChange={(e) =>
                                setAddress(
                                    e.target.value
                                )
                            }
                        />

                        <select
                            className="form-control mt-3"
                            value={payment}
                            onChange={(e) =>
                                setPayment(
                                    e.target.value
                                )
                            }
                        >

                            <option value="">
                                Select Payment Method
                            </option>

                            <option>
                                Cash On Delivery
                            </option>

                            <option>
                                UPI
                            </option>

                            <option>
                                Credit Card
                            </option>

                            <option>
                                Debit Card
                            </option>

                        </select>

                        <button
                            className="btn btn-success mt-4"
                            onClick={placeOrder}
                        >
                            Place Order
                        </button>

                    </div>

                </>

            )}

        </div>
    );
}

export default Cart;