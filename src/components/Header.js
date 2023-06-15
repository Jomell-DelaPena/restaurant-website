import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return ( 
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <>
                <Navbar bg="white" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                    <h1 style={{ color: 'black', fontFamily: 'Winthorpe Regular', fontSize: '55px' }}>FIKA café</h1>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#features">Order</Nav.Link>
                        <Nav.Link href="#pricing">Franchise</Nav.Link>
                    </Nav>
                    </Navbar.Brand>
                </Container>
                </Navbar>
            </>
        </div>
    );
}

export default Header;