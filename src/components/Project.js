import React from "react";
import Card from "react-bootstrap/Card";

const Project = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src="/images/Text-Editor-screenshot.png" />
                <Card.Title>J.A.T.E.</Card.Title>
                <Card.Text>
                    Here is a simple text editor I created in my bootcamp.
                </Card.Text>
                <Card.Link href="https://github.com/Ryguy720/Text-Editor">GitHub</Card.Link>
                <Card.Link href="https://just-another-texteditor.herokuapp.com/">Live link</Card.Link>
            </Card.Body>
        </Card>
    ),
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src="/images/WeatherappSS.png" />
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                    Here is a simple Weather app.
                </Card.Text>
                <Card.Link href="https://github.com/Ryguy720/Text-Editor">GitHub</Card.Link>
                <Card.Link href="https://just-another-texteditor.herokuapp.com/">Live link</Card.Link>
            </Card.Body>
        </Card>
}

export default Project