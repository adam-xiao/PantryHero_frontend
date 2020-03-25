import React from 'react';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
// import { render } from '@testing-library/react'

export default class NavigBar extends React.Component{
    
    render(){
        return(
            // <Navbar className="bg-light justify-content-between">
            //     <Col xs lg="2"></Col>
            //     <Form inline>
            //         <InputGroup>
            //                 <FormControl
            //                 placeholder="Username"
            //                 aria-label="Username"
            //                 aria-describedby="basic-addon1"
            //                 />
            //                 <FormControl
            //                 placeholder="Password"
            //                 aria-label="Password"
            //                 aria-describedby="basic-addon1"
            //                 />
            //         </InputGroup>
            //         <pre> </pre>
            //         <Button type="submit">Login</Button>
            //         <pre> </pre>
            //         <Button type="submit">Sign out</Button>

            //     </Form>
            // </Navbar>
    
            <Navbar className="bg-light justify-content-between">
                <Col sm={9}></Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/pantry">Pantry</Nav.Link>
                        
                        {/* <Nav.Dropdown title="Recipe" id="basic-nav-dropdown">
                            <Dropdown.Item href="#action/3.1">Fav Recipes</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#action/3.2">Recipe Selector</Dropdown.Item>
                        </Nav.Dropdown> */}

                        {localStorage.token ? 
                            <Navbar.Text>Hello, {this.props.username}<Button type="submit" onClick={this.props.logout}>Sign out</Button></Navbar.Text>
                            :  
                            <>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/Signup">Sign Up</Nav.Link>
                            </>
                             }
                             
                        

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
