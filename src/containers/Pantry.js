import React, { Component } from 'react';
import FoodCard from '../components/FoodCard';
import SearchCard from '../components/SearchCard';
import Search from '../components/Search';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

class Pantry extends Component {

    state = {
        pantry: []
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:3000/user`, {
            headers: {
                "Authorization": localStorage.token
            }
        })
            .then(resp => resp.json())
            .then(data => this.setState({ pantry: data }))
    }

    handleDelete = (id) => {
        fetch(`http://127.0.0.1:3000/ingredients/${id}`,
        { method: 'DELETE'}
        ).then(this.setState({pantry: this.state.pantry.filter(item=>item.id !== id)}))
      }

    render() {
        return (
            <div>
                <h1>Pantry</h1>

                {localStorage.token ?

                    <div>
                        <h2>Add new items</h2>
                        <Search handleSearchBar={this.props.handleSearchBar} />
                        <br></br>
                        <Container fluid>
                            <Row>
                                <Col sm={8}>
                                    <Table striped bordered hover>
                                        <tbody>
                                            {this.state.pantry.map(item => <FoodCard food={item}  key={item.id} handleDelete={this.handleDelete}/>)}
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col sm={4}>
                                    {this.props.currentIng && <SearchCard food={this.props.currentIng} user_id={this.props.user_id}/>}
                                </Col>
                            </Row>
                        </Container>
                        
                    </div>

                    : <div>please sign in </div>}
            </div>

        )
    }

}

export default Pantry 
