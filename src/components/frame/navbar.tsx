import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/images/logo/fam_trees.svg';

export default () => {
    const Toggler = <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0 animated-icon'>
        <span/>
        <span/>
        <span/>
    </Navbar.Toggle>;

    return (<Navbar className='py-1 border-bottom border-primary' bg="dark" variant='dark' expand={false}>
        <Navbar.Brand href="/">
            <img src={logo} alt="famtrees" height={45}/>
        </Navbar.Brand>
        {Toggler}
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <Nav.Link className='m-auto text-uppercase' href="#">SEARCH AND BREADCRUMB</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>)
}