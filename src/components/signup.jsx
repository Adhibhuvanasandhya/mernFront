import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async () => {
        const response = await fetch("https://mernback-ckw0.onrender.com/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            navigate("/");
        } else {
            setMessage(data.message);
        }
    };

    return (
        <div className="flex flex-col items-center p-6 space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold">Welcome to Fruit Corner</h1>
            <p className="text-lg">Sign up to manage your fruits :)</p>
            <div className="w-full max-w-sm space-y-4">
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                    onClick={handleSignup}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Sign Up
                </button>
                {message && <p className="text-red-500">{message}</p>}
            </div>
            <p className="text-lg">
                Already have an account? <Link to="/" className="text-blue-500 underline text-lg">Login</Link>
            </p>
        </div>
    );
}

export default Signup;
