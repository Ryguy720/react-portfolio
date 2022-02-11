import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Contact = () => {
    return (<main className="home-container mt-5">
        <h1>
        <Container>
        {/* <Button><a href="mailto:test@example.com?subject=Testing out mailto!&body=This is only a test!">Second Example</a></Button> */}
        <iframe className= "m-5 p-5" src="https://docs.google.com/forms/d/e/1FAIpQLScmUdNFgRbZpST0BRyWf0ZklYbRFedU5S9sOz-baI_RbpoAuA/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Container>
        </h1>
    </main> )
}


export default Contact;