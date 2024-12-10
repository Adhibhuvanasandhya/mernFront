import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import Fruits from "./components/fruits";
import one from "./assests/Images/fruit5.avif";

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="bg-cyan-300 min-h-screen">
            <div
                className="h-screen p-4 md:p-20 bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: `url(${one})` }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login setUser={setUser} />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/fruit" element={<Fruits user={user} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
