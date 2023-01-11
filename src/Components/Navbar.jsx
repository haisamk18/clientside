
import {Nav, Navbar, Container} from 'react-bootstrap'; 
import './Navbar.css';


function Navbarm() {
  return (
    <Navbar className="conmain" expand="lg">
      <Container className='con' >
        <Navbar.Brand href="#home" ><span className='brand'>News Wallah</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='navlinkscon'>
            <Nav.Link className='Navlinks'  href="#news1"><span className='linktext'>News 1</span></Nav.Link>
            <Nav.Link className='Navlinks' href="#news2"><span className='linktext'>News 2</span></Nav.Link>
            <Nav.Link className='Navlinks' href="#news3"><span className='linktext'>News 3</span></Nav.Link>
            <Nav.Link className='Navlinks' href="#news4"><span className='linktext'>News 4</span></Nav.Link>
            <Nav.Link className='Navlinks' href="#news5"><span className='linktext'>News 5</span></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarm;