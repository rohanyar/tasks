import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Holidays
// Christmas: 🎄
// New Years: 🍾
// Halloween: 🎃
// Thanksgiving: 🦃
// Valentines Day: ❤️

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🍾");
    const byYear: Record<string, string> = {
        "🍾": "❤️",
        "❤️": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🍾"
    };
    const byLetter: Record<string, string> = {
        "🎄": "🎃",
        "🎃": "🍾",
        "🍾": "🦃",
        "🦃": "❤️",
        "❤️": "🎄"
    };

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <div>
                <Button onClick={() => setHoliday(byYear[holiday])}>
                    Advance by Year
                </Button>
            </div>
            <div>
                <Button onClick={() => setHoliday(byLetter[holiday])}>
                    Advance by Alphabet
                </Button>
            </div>
        </div>
    );
}
