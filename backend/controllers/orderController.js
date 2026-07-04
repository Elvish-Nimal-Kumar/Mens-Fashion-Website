const Order =
require("../models/Order");

exports.placeOrder =
async (req, res) => {

    try {

        const order =
            new Order(req.body);

        await order.save();

        res.status(201).json({
            message:
                "Order Placed Successfully"
        });

    }
    catch (error) {

        res.status(500).json({
            error:
                error.message
        });
    }
};