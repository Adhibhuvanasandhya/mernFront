import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setUser }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        const response = await fetch("https://mernback-ckw0.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            setUser(username);
            navigate("/fruit");
        } else {
            setError("Invalid username or password.");
        }
    };

    return (
        <div className="flex flex-col items-center p-6 space-y-4 text-center">
            <h1 className="text-5xl md:text-4xl font-extrabold">Welcome to Fruit Corner</h1>
            <p className="text-lg">Let's buy your fruits after Login :)</p>
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
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Login
                </button>
                {error && <p className="text-red-500">{error}</p>}
            </div>
            <p className=" text-lg">
                Don't have an account? <Link to="/signup" className="text-blue-500 underline text-lg">Sign up</Link>
            </p>
        </div>
    );
}

export default Login;
