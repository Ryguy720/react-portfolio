import React from "react";
import Figure from 'react-bootstrap/Figure'
import { Container } from "react-bootstrap";

const Aboutme = () => {
    return (<div className = "m-5 p-5" id="aboutme">
        <Container>
        <Figure>
            <Figure.Image className="m-3 p-3"
                width={591}
                height={620}
                alt="171x180"
                src="/images/Telluride.jpg"
            />
            </Figure>
            <h1 className = "aboutme" >
                Hi, welcome to my first React app. My name is Ryan and I've been lerning how to code for almost six months.
                I've wanted to change carreers for a while and decided to give coding a shot. During my time in the DU coding bootcamp
                I've learned about many different technologies including HTML5, CSS3, JavaScript, jQuery, Node.js, PHP, Laravel, Express.js, React.
                Learning how to code has been a challenging yet rewarding journey and I'm exited to see where I go next. 
                Thank you for visiting my page and stay tuned for more updates. 
            </h1>
        
        </Container>
   </div> )
}

export default Aboutme;