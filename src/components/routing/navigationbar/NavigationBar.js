import {Link} from 'react-router-dom'
import {Navbar ,Container ,Nav ,NavDropdown} from 'react-bootstrap';
import {Grid } from '@material-ui/core';
import {  Row ,Col} from 'react-bootstrap'

function NavigationBar() {
    return(
<>
<Container>
<Row>
    <Col sm xs={12}>

    <Navbar bg="white" variant="light">
    <Container>
    <NavDropdown title="All Category" id="basic-nav-dropdown" style={{fontWeight:500 , fontSize:24 ,color:""}}>
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
   
    <Nav className="me-auto">
  <Link to="/mobilephone">    <Nav.Link href="#home">  Mobile Phones</Nav.Link> </Link>
  <Link to="/car">  <Nav.Link href="#features">Cars</Nav.Link> </Link> 
  <Link to="/motorcycle">  <Nav.Link href="#features">Motorcycles</Nav.Link> </Link>  
  <Link to="/tv">      <Nav.Link href="#pricing">TV - Video - Audio</Nav.Link> </Link>
  <Link to="/tablet">  <Nav.Link href="#pricing">Tablets</Nav.Link> </Link>  
  <Link to="/landsplot">   <Nav.Link href="#pricing">Land & Plots</Nav.Link> </Link> 
 


    </Nav>
    </Container>
  </Navbar>

    </Col>
    
  </Row>
</Container>

 
</>
    )
}

export default NavigationBar;