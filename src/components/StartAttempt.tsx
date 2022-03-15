import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <div>
                Attempts: <p>{attempts}</p>
                <Button
                    onClick={startQuiz}
                    disabled={attempts === 0 || progress === true}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={progress === false}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={progress === true}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
