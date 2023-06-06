import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

function BootstrapNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link href="/" className="navbar-brand">Next Web App</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <div className="nav-item">
                            <Link href="/" className="nav-link">Home</Link>
                        </div>
                        <div className="nav-item">
                            <Link href="/about" className="nav-link">About</Link>
                        </div>
                        <div className="nav-item">
                            <Link href="/create-product" className="nav-link">Create Product</Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BootstrapNavbar;