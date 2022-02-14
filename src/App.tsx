import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>First Website!</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Name: Rohan
                Yarlagadda
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <div>
                <button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </button>
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
                    </Col>
                    <Col>Second Column</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
