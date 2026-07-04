const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* MongoDB */
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

/* Routes */
app.use(
    "/api/orders",
    require("./routes/orderRoutes")
);

app.use(
    "/api/complaints",
    require("./routes/complaintRoutes")
);

/* Test Route */
app.get("/", (req, res) => {
    res.send(
        "Men's Fashion API Running"
    );
});

/* Server */
const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});