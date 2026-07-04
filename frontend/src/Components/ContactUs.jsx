import axios from "axios";
import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !form.name ||
            !form.email ||
            !form.message
        ) {
            alert("Please fill all fields");
            return;
        }

        try {

            const response =
                await axios.post(
                    "http://localhost:5000/api/complaints",
                    form
                );

            alert(
                response.data.message
            );

            setForm({
                name: "",
                email: "",
                message: ""
            });

        }
        catch (error) {

            console.log(error);

            alert(
                "Failed to send message"
            );
        }
    };

    return (

        <div className="contact-container">

            <div className="contact-card">

                <h2>
                    Contact Us
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Enter Your Message"
                        value={form.message}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

        </div>
    );
}

export default ContactUs;