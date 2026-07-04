const express =
require("express");

const router =
express.Router();

const {
    sendComplaint
} =
require(
    "../controllers/complaintController"
);

router.post(
    "/",
    sendComplaint
);

module.exports =
router;