import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

import transparentLogo from '../../../assets/logo_transparent.png';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <style>
        {`
          .pageNav {
            text-decoration: none;
            color: rgba(255, 255, 255, 0.25);
            padding: .5rem; 
          }
          
          .pageNav:hover {
            color: rgba(255, 255, 255, 0.45);
          }
          
          .active, .active:hover {
            color: rgba(255, 255, 255, 1);
          }

          .navContainer {
            @media (min-width: 1200px) {
              width: 100%;
              height: 5%;
            }
          }
          .navWrap {
            @media (min-width: 1200px) {
              width: 100%;
              height: 7%;
            }
          }
        `}
        </style>
        <Navbar collapseOnSelect
          expand="lg"
          variant="dark"
          sticky="top"
          style={{ backgroundColor: '#191919', padding: '0.5rem' }}
          className='navWrap'
        >
          <Container
            fluid
            style={{
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'Poppins Light',
              fontSize: 15,
              color: 'white',
            }}
            className='navContainer'
          >
            <NavLink to="/" style={{ paddingLeft: 30 }}>
              <img
                src={transparentLogo}
                className="d-inline-block align-top"
                width="40"
                height="40"
              />
              <div
                className="d-inline-block align-top"
                style={{
                  fontFamily: 'Mokoto',
                  fontSize: 20,
                  padding: 5,
                }}
              >
                HACKRPI
              </div>
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className='mainNav' style={{ marginRight: 'auto' }}>
              <NavLink to="/home" className='pageNav'> Home </NavLink>
              <NavLink to="/faq" className='pageNav'> FAQ </NavLink>
              <NavLink to="/mini-event" className='pageNav'> Mini Event </NavLink>
            </Nav>

            <Nav className="mainNav" style={{ alignLeft: 'auto', alignItems: 'center' }}>
              <Nav.Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                MLH Code of Conduct
              </Nav.Link>

              <Nav className="d-flex" style={{ paddingRight: "10vw" }}>
                <Nav.Link href="https://organize.mlh.io/participants/events/9892-hackrpi">
                  <Button
                    variant="outline"
                    size="sm"
                    style={{ backgroundColor: '#910307', color: 'white' }}
                  >
                    Register
                  </Button>
                </Nav.Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
