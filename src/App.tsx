import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>First Website!</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Name: Rohan Yarlagdda
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <Container>
                <Row>
                    <Col>First Column</Col>
                    <Col>Second Column</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
