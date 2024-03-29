import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope, faHandshake, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/WEBDEVSKI-logos_transparent.png';
import { Link } from "react-router-dom";
import { supabase } from "../server/client.js";
import { useNavigate } from 'react-router-dom';

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
                    <Nav.Link as={Link} to="/job-feed" className={activeLink === 'job-feed' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('job-feed')}>Job Feed</Nav.Link>
                    <Nav.Link as={Link} to="/stackDevski" className={activeLink === 'stackDevski' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('stackDevski')}>stackDevski</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><FontAwesomeIcon className="ficon" icon={faFacebook}></FontAwesomeIcon></a>
                        <a href="#"><FontAwesomeIcon className="ficon" icon={faInstagram}></FontAwesomeIcon></a>
                        <a href="#"><FontAwesomeIcon className="ficon" icon={faDiscord}></FontAwesomeIcon></a>
                    </div>
                        <Link as={Link} to="/success" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><button className="vvd">Log OUT</button></Link>    
                        <Link to="/login">
                            <button className="vvd" onClick={() => console.log('connect')}><span>Sign In</span></button>
                        </Link>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;