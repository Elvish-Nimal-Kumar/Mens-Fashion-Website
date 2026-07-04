import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import NavbarComponent from "./Components/Navbar";
import Cart from "./Components/Cart";
import CreateAccount from "./Components/CreateAccount";
import SignIn from "./Components/SignIn";
import FAQ from "./Components/FAQ";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import CategoryPage from "./Components/CategoryPage";

import Shirts from "./Components/Shirts";
import Tshirts from "./Components/Tshirts";
import Jeans from "./Components/Jeans";
import EthnicWear from "./Components/EthnicWear";
import TrackPants from "./Components/TrackPants";
import Shorts from "./Components/Shorts";
import Watches from "./Components/Watches";
import Shoes from "./Components/Shoes";

/* ================= HOME PAGE ================= */

function Home({ addToCart }) {
    return (
        <>
            <div className="hero">
                <h1>Welcome To Classy Mens Wear</h1>
                <p>Premium Fashion Collection</p>
            </div>

            <Shirts addToCart={addToCart} />
            <Tshirts addToCart={addToCart} />
            <Jeans addToCart={addToCart} />
            <EthnicWear addToCart={addToCart} />
            <TrackPants addToCart={addToCart} />
            <Shorts addToCart={addToCart} />
            <Watches addToCart={addToCart} />
            <Shoes addToCart={addToCart} />
        </>
    );
}

/* ================= APP ================= */

function App() {

    const [cart, setCart] = useState([]);

    /* ADD TO CART */
    const addToCart = (product) => {

        const existingProduct = cart.find(
            item =>
                item.name === product.name &&
                item.size === product.size
        );

        if (existingProduct) {

            setCart(
                cart.map(item =>
                    item.name === product.name &&
                    item.size === product.size
                        ? {
                              ...item,
                              quantity: item.quantity + 1
                          }
                        : item
                )
            );

        } else {

            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1
                }
            ]);
        }
    };

    /* REMOVE PRODUCT */
    const removeFromCart = (index) => {

        setCart(
            cart.filter((_, i) => i !== index)
        );
    };

    /* INCREASE QUANTITY */
    const increaseQty = (index) => {

        setCart(
            cart.map((item, i) =>
                i === index
                    ? {
                          ...item,
                          quantity: item.quantity + 1
                      }
                    : item
            )
        );
    };

    /* DECREASE QUANTITY */
    const decreaseQty = (index) => {

        setCart(
            cart.map((item, i) => {

                if (
                    i === index &&
                    item.quantity > 1
                ) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }

                return item;
            })
        );
    };

    return (
        <>
            {/* Navbar */}
            <NavbarComponent cart={cart} />

            {/* Routes */}
            <Routes>

                {/* Home */}
                <Route
                    path="/"
                    element={
                        <Home
                            addToCart={addToCart}
                        />
                    }
                />

                {/* Category Pages */}
                <Route
                    path="/category/:category"
                    element={
                        <CategoryPage
                            addToCart={addToCart}
                        />
                    }
                />

                {/* Cart */}
                <Route
                    path="/cart"
                    element={
                        <Cart
                            cart={cart}
                            removeFromCart={removeFromCart}
                            increaseQty={increaseQty}
                            decreaseQty={decreaseQty}
                        />
                    }
                />

                {/* Create Account */}
                <Route
                    path="/create-account"
                    element={<CreateAccount />}
                />

                {/* Sign In */}
                <Route
                    path="/signin"
                    element={<SignIn />}
                />

                {/* FAQ */}
                <Route
                    path="/faq"
                    element={<FAQ />}
                />

                {/* Contact Us */}
                <Route
                    path="/contact"
                    element={<ContactUs />}
                />

                {/* 404 Page */}
                <Route
                    path="*"
                    element={
                        <h2 className="text-center mt-5">
                            Page Not Found
                        </h2>
                    }
                />

            </Routes>

            {/* Footer */}
            <Footer />

        </>
    );
}

export default App;