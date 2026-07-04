import React, { useState } from "react";
import "./CreateAccount.css";

function CreateAccount() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !user.name ||
            !user.email ||
            !user.phone ||
            !user.password ||
            !user.confirmPassword
        ) {
            alert("Please fill all fields");
            return;
        }

        if (user.password !== user.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        alert("Account Created Successfully!");

        setUser({
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        });
    };

    return (
        <div className="create-account-container">

            <div className="create-account-card">

                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={user.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={user.email}
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={user.phone}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={user.confirmPassword}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Create Account
                    </button>

                </form>

            </div>

        </div>
    );
}

export default CreateAccount;