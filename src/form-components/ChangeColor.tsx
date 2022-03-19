import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>(COLORS[0]);
    const updateColor = (event: ChangeEvent) => {
        setChosen(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={`color-${color}`}
                    label={color}
                    key={color}
                    value={color}
                    checked={color === chosen}
                    style={{
                        backgroundColor: color,
                        color: color !== "white" ? "white" : "black"
                    }}
                ></Form.Check>
            ))}
            <div>
                <p>The current color is </p>
                <span
                    data-testid="colored-box"
                    style={{
                        backgroundColor: chosen,
                        color: chosen !== "white" ? "white" : "black"
                    }}
                >
                    {chosen}
                </span>
            </div>
        </div>
    );
}
