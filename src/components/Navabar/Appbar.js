import { Navbar, Container, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import { Hidden } from '@material-ui/core'
import './appbar.css';
import {Link} from 'react-router-dom'
import Modal from '../modules/landingPage/modal'

function Appbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
      <Link to="/"> <Navbar.Brand href="#home">
          <img
            src="https://www.olx.com.pk/assets/logo_noinline.1cdf230e49c0530ad4b8d43e37ecc4a4.svg"
            width=""
            height=""
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> </Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Hidden smDown>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder='Search City,Area and Location'
              className="mr-2 "
              aria-label="Search"
              id="searchBox"
            />

          </Form>
        </Hidden>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Hidden smDown>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder='Search City,Area and Location'
                className="mr-2 "
                aria-label="Search"
                id="searchBox2"
              />
              <Button variant="dark" id="searchButton"><SearchIcon /></Button>{' '}
            </Form>
            </ Hidden >

              <Nav className="me-auto">
  <Nav.Link href="login" id="login"><Modal /> </Nav.Link>
                <Button variant="" className="button" >  <img src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" alt="" /></Button>{' '}
              </Nav>
              {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Appbar;