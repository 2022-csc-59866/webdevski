import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope, faHandshake, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/WEBDEVSKI-logos_transparent.png';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <div>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
                    <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    <Nav.Link as={Link} to="/job-feed" className={activeLink === 'job-feed' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('job-feed')}>Job Feed</Nav.Link>
                    <Nav.Link as={Link} to="/stackDevski" className={activeLink === 'stackDevski' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stackDevski')}>stackDevski</Nav.Link>
{/*                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><FontAwesomeIcon className="ficon" icon={faFacebook}></FontAwesomeIcon></a>
                        <a href="#"><FontAwesomeIcon className="ficon" icon={faInstagram}></FontAwesomeIcon></a>
                        <a href="#"><FontAwesomeIcon className="ficon" icon={faDiscord}></FontAwesomeIcon></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Sign In</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;