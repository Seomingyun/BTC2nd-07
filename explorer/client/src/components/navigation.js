import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
    return (
        <div className="Navigation">
            <Navbar bg="" variant="dark" style={{backgroundColor: "#4a5a74"}}>
                <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/images/adios.png"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                    <img
                        alt=""
                        src="/images/adios_font.png"
                        height="55"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;
