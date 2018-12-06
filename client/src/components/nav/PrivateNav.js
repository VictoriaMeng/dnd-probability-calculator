import React from 'react'
import { Nav, NavItem, NavLink, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

const PrivateNav = (props) => 
  <Container>
    <Nav>
      <NavItem>
        <NavLink tag={Link} to="/to-hit">
          Calculate To Hit/Saving Throw Chance
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink tag={Link} to ="/damage">
          Calculate Damage
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink tag={Link} to={{
          pathname: `/users/${sessionStorage.getItem('id')}`,
        }}>
          Your Page
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink tag={Link} to="/" onClick={props.logout}>
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  </Container>

export default PrivateNav