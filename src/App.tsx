import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
<<<<<<< HEAD
import { Button } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>First Website!</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Name: Rohan
                Yarlagadda
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div>
                            <img
                                src="https://64.media.tumblr.com/dc7c8f66d80dd18c19b09b8fb92aac04/682eec13776ef06f-39/s540x810/2a92b320b89255721958619c066edf2de74a1da6.jpg"
                                alt="Remy from Ratatouille"
                                width="300"
                                height="300"
                            />
                        </div>
                        <div className="rectangles"></div>
                    </Col>
                    <Col>
                        Second Column
                        <div>
                            <ul>
                                <li>Ratatouille is a pretty good movie</li>
                                <li>My friend likes pineapples and mangos</li>
                                <li>
                                    Erica likes baking brownies on the weekends
                                </li>
                            </ul>
                        </div>
                        <div className="rectangles"></div>
                    </Col>
                </Row>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
