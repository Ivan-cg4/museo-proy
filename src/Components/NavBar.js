import { Navbar, Container, Nav, BrowserRouter as Router, Route, Link } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/dino1.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function redirigirAotraPagina() {
    // Cambia la URL al otro archivo HTML
    window.location.href = "otro-index.html";
}

export const NavBar = () =>{
    const [scrolled, setScrolled] = useState(false);
    const[activeLink, setActiveLink]= useState('home');


    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
                
            }else{
                setScrolled(true)
            }
        }
        window.addEventListener("scroll", onScroll)
        return ()=>window.removeEventListener("scroll", onScroll);
    },[])
    const onUpdateActiveLink =(value)=>{
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggles.icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink ==='home'?'avtive navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Principal</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink ==='home'?'avtive navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('banner')}>Imagenes</Nav.Link>
                    <Nav.Link href="#miFormulario" className={activeLink ==='home'?'avtive navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Mensajes</Nav.Link>
                    <Nav.Link href="#credito" className={activeLink ==='home'?'avtive navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Pagina de Credito</Nav.Link>
                    <Nav.Link href="#boli" className={activeLink ==='home'?'avtive navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Casa Nacional de Plata</Nav.Link>
                    <Nav.Link href="#mus" className={activeLink ==='home'?'avtive navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Museos en Bolivia</Nav.Link>
                    <Nav.Link href="#ciencia" className={activeLink ==='home'?'avtive navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Museo de Ciencia</Nav.Link>
                    <Nav.Link href="#arte" className={activeLink ==='home'?'avtive navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Museo de Arte</Nav.Link>
                    <Nav.Link href="#hist" className={activeLink ==='home'?'avtive navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Museo de Historia</Nav.Link>




                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        
                        <a href="#"><img src={navIcon2} alt=""/></a>
                        <a href="#"><img src={navIcon3} alt=""/></a>
                    </div>                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}