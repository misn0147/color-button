import { useState } from "react";
import "./App.css";

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const newButtonColor = buttonColor === "red" ? "blue" : "red";

    const [disabled, setDisabled] = useState(false);

    return (
        <div>
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={disabled}
            >
                Change to {newButtonColor}
            </button>
            <input
                type="checkbox"
                id="disable-button-checkbox"
                onChange={(e) => setDisabled(e.target.checked)}
                defaultChecked={disabled}
                aria-checked={disabled}
            />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    );
}

export default App;
