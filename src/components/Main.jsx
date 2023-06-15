import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import videoBg from '../assets/videoBg.mp4';


const bgvid = () => {
    return (
            <div className='main'> <div className='overlay'></div>
            <Navbar bg="light" variant="light">
                        <Container>
                            <Navbar.Brand href="#home">FIKA café</Navbar.Brand>
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">About</Nav.Link>
                                    <Nav.Link href="#features">Order</Nav.Link>
                                    <Nav.Link href="#pricing">Franchise</Nav.Link>
                                </Nav>
                        </Container>
                    </Navbar>
                <video src={videoBg} autoPlay loop muted ></video>
                    <div className="content">
                        <h1 style={{ color: 'white', fontFamily: 'Winthorpe Regular', fontSize: '55px' }}>FIKA café</h1>
                        <p>Love at first sip.</p>
                    </div>
            </div>
    )
}

export default bgvid