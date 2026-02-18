import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎆" | "🎃" | "☘️" | "❤️";

// Alphabetical order: Christmas, Independence Day (4th of July), Halloween, St Patrick's, Valentine's
// C -> I -> H -> S -> V
const ALPHABET_NEXT: Record<Holiday, Holiday> = {
    "🎄": "🎆",
    "🎆": "🎃",
    "🎃": "☘️",
    "☘️": "❤️",
    "❤️": "🎄",
};

// Year order: Valentine's (Feb) -> St Patrick's (Mar) -> Independence Day (Jul) -> Halloween (Oct) -> Christmas (Dec)
const YEAR_NEXT: Record<Holiday, Holiday> = {
    "❤️": "☘️",
    "☘️": "🎆",
    "🎆": "🎃",
    "🎃": "🎄",
    "🎄": "❤️",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(ALPHABET_NEXT[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(YEAR_NEXT[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
