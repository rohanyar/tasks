import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [Give, setGive] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Remaining Attempts: {attempts}</p>
            <Button
                onClick={() => {
                    setAttempts((prevAttempts: number) => prevAttempts - 1);
                }}
                disabled={attempts === 0}
            >
                Attempt
            </Button>
            <Button
                onClick={() => {
                    setAttempts((prevAttempts: number) => prevAttempts + Give);
                }}
            >
                Give
            </Button>
            <Form.Group controlId="requestAttempts">
                <Form.Label>Request Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={Give}
                    onChange={(event: ChangeEvent) =>
                        setGive(parseInt(event.target.value) || 0)
                    }
                    style={{
                        width: "fit-content",
                        display: "-ms-inline-flexbox",
                        margin: "auto",
                        textAlign: "left"
                    }}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}
