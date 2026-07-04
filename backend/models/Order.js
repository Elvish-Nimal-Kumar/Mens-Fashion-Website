const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
    customerName: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    paymentMethod: {
        type: String,
        required: true
    },

    items: [
        {
            name: String,
            price: Number,
            quantity: Number,
            size: String,
            image: String
        }
    ],

    totalPrice: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "Order",
    orderSchema
);