import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button, Col, Container, Row } from "react-bootstrap";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
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
            <hr></hr>
            <hr></hr>

            <p>
                <strong>Task 3:</strong>
            </p>
            <img
                src={`${process.env.PUBLIC_URL}/Images/E33.jpg`}
                alt="Favorite Game"
                style={{ width: 200 }}
            />

            <br />

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <ul>
                <li>I am coding</li>
                <li>I am doing Task 3</li>
                <li>I like to eat</li>
            </ul>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>

                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>

            <br />
            <p>
                <strong>Task 1:</strong>
            </p>
            <p>
                <code>Nico Fiasco</code>
            </p>
            <p>Hello World</p>
        </div>
    );
}

export default App;
