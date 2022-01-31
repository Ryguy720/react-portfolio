import React from "react";
import Figure from 'react-bootstrap/Figure'

const Aboutme = () => {
    return (
        <Figure>
            <Figure.Image
                width={591}
                height={620}
                alt="171x180"
                src="/images/Telluride.jpg"
            />
            <Figure.Caption>
                Hi, welcome to my first React app. My name is Ryan and I've been lerning how to code for almost six months.
                I've wanted to change carreers for a while and decided to give coding a shot. Thanks for visiting my page and stay tuned for more updates.
            </Figure.Caption>
        </Figure>
    )
}

export default Aboutme;