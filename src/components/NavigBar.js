import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
// import { render } from '@testing-library/react'

function NavigBar (props){

    const [search, setSearch] = useState("")


    const handleOnChange = e => setSearch(e.target.value)

    const handleOnSubmit = e => {
        e.preventDefault()
        props.handleSearchBar(search)
    }

    return(
        <Navbar className="bg-light justify-content-between">
            
            <Form xs lg="2" inline onSubmit={handleOnSubmit}>
                <FormControl value={search} onChange={handleOnChange} type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">Submit</Button>
            </Form>
            
            <Form inline>
                <InputGroup>
                        <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                        <FormControl
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                        />
                </InputGroup>
                <pre> </pre>
                <Button type="submit">Login</Button>
                <pre> </pre>
                {localStorage.token ? <Button type="submit" onClick={props.logout}>Sign out</Button>: <div>Please Sign in</div>}
            </Form>
        </Navbar>
    )
}

export default NavigBar