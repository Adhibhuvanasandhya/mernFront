import { useState, useEffect } from "react";

function Fruits({ user }) {
    const [fruit, setFruit] = useState("");
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const fetchFruits = async () => {
            const response = await fetch("https://mernback-ckw0.onrender.com/fruits");
            const data = await response.json();
            setFruits(data);
        };

        fetchFruits();
    }, []);

    const addFruit = async () => {
        if (fruit.trim() === "") return;

        const response = await fetch("https://mernback-ckw0.onrender.com/add-fruit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fruit }),
        });

        const data = await response.json();
        setFruits(data.fruits);
        setFruit("");
    };

    const deleteFruit = async (fruitToDelete) => {
        const response = await fetch("https://mernback-ckw0.onrender.com/delete-fruit", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fruit: fruitToDelete }),
        });

        const data = await response.json();
        setFruits(data.fruits);
    };

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-center">Welcome, {user}!</h1>
            <div className="max-w-md mx-auto p-6 rounded-lg shadow-md backdrop-blur-sm bg-[rgba(255, 255, 255, 0.2)] text-white">
                <h2 className="text-xl font-semibold mb-4">Add Your Favorite Fruits</h2>
                <div className="flex space-x-2 mb-4">
                    <input
                        type="text"
                        value={fruit}
                        onChange={(e) => setFruit(e.target.value)}
                        placeholder="Enter fruit name"
                        className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
                    />
                    <button
                        onClick={addFruit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>
                <div className="max-h-80 overflow-y-auto space-y-2">
                    {fruits.map((f, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg text-black"
                        >
                            <p>{f}</p>
                            <button
                                onClick={() => deleteFruit(f)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Fruits;
