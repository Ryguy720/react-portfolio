import React from "react";
import Card from "react-bootstrap/Card";
import '../App.css';

const Project = (app) => {
    return (<>
        <Card style={{ width: '18rem' }}>
            <Card.Body className = 'cardBody'>
                <Card.Img variant="top" src={app.screenshot} />
                <Card.Title>{app.app}.</Card.Title>
                <Card.Text>
                   {app.description}
                </Card.Text>
                <Card.Link href={app.github}>GitHub</Card.Link>
                <Card.Link href={app.live}>Live link</Card.Link>
            </Card.Body>
        </Card>
  </>  )
        // <Card style={{ width: '18rem' }}>
        //     <Card.Body>
        //         <Card.Img variant="top" src="/images/WeatherappSS.png" />
        //         <Card.Title>Weather App</Card.Title>
        //         <Card.Text>
        //             Here is a simple Weather app.
        //         </Card.Text>
        //         <Card.Link href="https://github.com/Ryguy720/Text-Editor">GitHub</Card.Link>
        //         <Card.Link href="https://just-another-texteditor.herokuapp.com/">Live link</Card.Link>
        //     </Card.Body>
        // </Card>
}

export default Project