import React, {useState,useEffect}  from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import "../../styles/HeaderStyle.css";
import { Link,useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
function Header() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  // sectionScroll
 const sectionScroll = (e, sectionId) => {
  e.preventDefault();

  const scrollToSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (window.location.pathname !== '/') {
    navigate('/');
    setTimeout(scrollToSection, 500); // Give time for homepage to mount
  } else {
    scrollToSection(); // Already on home page
  }
};

  //Scroll Navbar
  const changeValueOnScroll = () =>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav (true) : setNav(false);
  }
  useEffect(() =>{
    window.addEventListener("scroll" , changeValueOnScroll);
    return () => (
      window.removeEventListener("scroll", changeValueOnScroll)
    )
  },[])
   return (
    <>
    <header>
    <Navbar collapseOnSelect expand="lg" className={` ${nav === true ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
            <Link to="/" className='logo'>
               <img src={Logo} alt="Logo"  className='img-fuild' width="100%"/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
           <Nav.Link as={Link} to="homesection" onClick={(e) => sectionScroll(e, "homesection")}>Home</Nav.Link>
            <Nav.Link as={Link} to="aboutsection" onClick={(e) => sectionScroll(e, "aboutsection")}>About</Nav.Link>
            <Nav.Link as={Link} to="menusection" onClick={(e) => sectionScroll(e, "menusection")}>Our Menu</Nav.Link>
            <Nav.Link as={Link} to="shopsection" onClick={(e) => sectionScroll(e, "shopsection")}>Shop</Nav.Link>
            <Nav.Link as={Link} to="blogsection" onClick={(e) => sectionScroll(e, "blogsection")}>Blog</Nav.Link>
            <Nav.Link as={Link} to="contactsection" onClick={(e) => sectionScroll(e, "contactsection")}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/">
                 <div className='cart'>
                 <i className="bi bi-bag fs-5"></i>
                 <em className='roundpoint'>2</em>
                 </div>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
     
    </>
  )
}

export default Header
