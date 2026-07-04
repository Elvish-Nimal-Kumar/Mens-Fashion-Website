import React, { useState } from "react";
import "./SignIn.css";

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        alert("Login Successful");
    };

    return (
        <div className="signin-container">

            <div className="signin-card">

                <h2>Sign In</h2>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button type="submit">
                        Sign In
                    </button>

                </form>

            </div>

        </div>
    );
}

export default SignIn;