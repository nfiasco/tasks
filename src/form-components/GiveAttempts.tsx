import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function handleUse(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function handleGain(): void {
        const parsed = parseInt(requestedAttempts);
        if (!isNaN(parsed)) {
            setAttemptsLeft(attemptsLeft + parsed);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attemptsLeft}</div>
            <Form.Group controlId="formRequestedAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempts(e.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={handleUse} disabled={attemptsLeft <= 0}>
                use
            </Button>
            <Button onClick={handleGain}>gain</Button>
        </div>
    );
}
