import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Header(props) {
    return (
        <Navbar className="border-bottom" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className= "text-primary">
                    <h2>Podcaster</h2>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
};