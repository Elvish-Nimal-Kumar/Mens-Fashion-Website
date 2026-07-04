const Complaint =
require("../models/Complaint");

exports.sendComplaint =
async (req, res) => {

    try {

        const complaint =
            new Complaint(req.body);

        await complaint.save();

        res.status(201).json({
            message:
                "Message Sent Successfully"
        });

    }
    catch (error) {

        res.status(500).json({
            error:
                error.message
        });
    }
};