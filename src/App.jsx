import { useState } from "react";
import "./App.css";

function App() {
    const [color, setColor] = useState("black");

    return (
        <div
            className="w-full h-screen duration-200"
            style={{ backgroundColor: color }}
        >
            <div className="fixed flex flex-wrap inset-x-0 px-2 bottom-12 justify-center">
                <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-full bottom-12 justify-center">
                    <button
                        onClick={() => setColor("red")}
                        className="outline-none px-3 py-1 rounded-full"
                        style={{ backgroundColor: "red" }}
                    >
                        Red
                    </button>

                    <button
                        onClick={() => setColor("green")}
                        className="outline-none px-3 py-1 rounded-full"
                        style={{ backgroundColor: "green" }}
                    >
                        Green
                    </button>

                    <button
                        onClick={() => setColor("blue")}
                        className="outline-none px-3 py-1 rounded-full"
                        style={{ backgroundColor: "blue" }}
                    >
                        Blue
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("yellow")}
                        style={{ backgroundColor: "yellow" }}
                    >
                        Yellow
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("orange")}
                        style={{ backgroundColor: "orange" }}
                    >
                        Orange
                    </button>

                    <button
                        className="border-2 border-black px-3 py-1 rounded-full"
                        onClick={() => setColor("white")}
                        style={{ backgroundColor: "white" }}
                    >
                        white
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("olive")}
                        style={{ backgroundColor: "olive" }}
                    >
                        Olive
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("pink")}
                        style={{ backgroundColor: "pink" }}
                    >
                        Pink
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("gray")}
                        style={{ backgroundColor: "gray" }}
                    >
                        Gray
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("purple")}
                        style={{ backgroundColor: "purple" }}
                    >
                        Purple
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("brown")}
                        style={{ backgroundColor: "brown" }}
                    >
                        Brown
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("magenta")}
                        style={{ backgroundColor: "magenta" }}
                    >
                        Magenta
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("crimson")}
                        style={{ backgroundColor: "crimson" }}
                    >
                        Crimson
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("cyan")}
                        style={{ backgroundColor: "cyan" }}
                    >
                        Cyan
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("lawngreen")}
                        style={{ backgroundColor: "lawngreen" }}
                    >
                        Neon
                    </button>

                    <button
                        className="outline-none px-3 py-1 rounded-full"
                        onClick={() => setColor("indigo")}
                        style={{ backgroundColor: "indigo" }}
                    >
                        Indigo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
