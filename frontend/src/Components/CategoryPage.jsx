import React from "react";
import { useParams } from "react-router-dom";

import Shirts from "./Shirts";
import Tshirts from "./Tshirts";
import Jeans from "./Jeans";
import EthnicWear from "./EthnicWear";
import TrackPants from "./TrackPants";
import Shorts from "./Shorts";
import Watches from "./Watches";
import Shoes from "./Shoes";

function CategoryPage({ addToCart }) {

    const { category } = useParams();

    if (category === "shirts") {
        return (
            <Shirts addToCart={addToCart} />
        );
    }

    if (category === "tshirts") {
        return (
            <Tshirts addToCart={addToCart} />
        );
    }

    if (category === "jeans") {
        return (
            <Jeans addToCart={addToCart} />
        );
    }

    if (category === "ethnicwear") {
        return (
            <EthnicWear addToCart={addToCart} />
        );
    }

    if (category === "trackpants") {
        return (
            <TrackPants addToCart={addToCart} />
        );
    }

    if (category === "shorts") {
        return (
            <Shorts addToCart={addToCart} />
        );
    }

    if (category === "watches") {
        return (
            <Watches addToCart={addToCart} />
        );
    }

    if (category === "shoes") {
        return (
            <Shoes addToCart={addToCart} />
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">
                Category Not Found
            </h2>
        </div>
    );
}

export default CategoryPage;