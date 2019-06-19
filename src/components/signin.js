import React, { Component } from 'react';
// import axios from "axios"
// import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
//  import FormControl from 'react-bootstrap/FormControl'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// done with Bootstrap modal
class SignIn extends Component {

    // constructor(props, context) {
    //     super(props, context);

    state = {
        // show: false,
        // errorMessage: '',
        email: '',
        password: '',
        // firstTime: 0
    };



    // this.handleChange = this.handleChange.bind(this);
    // }

    handleChange = (event) => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value,
            errorMessage: ''
        })
    }

    signInHandler = () => {
        var details = {
            email: "",
            password: ""
        }
        // const signIn = this.props.signIn
        // const email = this.state.email
        // const password = this.state.password
        details.email = this.state.email
        details.password = this.state.password

        if (details.password !== "" & details.email !== "") {
            this.props.signIn(details)
        }

    }


    render() {
        return (
            <>
                <Modal show={this.props.openClose} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign in to James Bond Shop</Modal.Title>
                    </Modal.Header>

                    <Form onSubmit={this.handleSubmit} className="createAccount">

                        Email
                            <Form.Control onChange={this.handleChange} name="email" />

                        Password
                            <Form.Control type="password" controlid="formBasicPassword" onChange={this.handleChange} name="password" />

                        
                        {this.props.error &&
                        <p className="redText centered">Details not found, please try again</p>
                        }

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.closeModal}>
                                Cancel
            </Button>
                            <Button variant="primary" onClick={() => this.signInHandler()} >
                                Sign In
            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }
}


export default SignIn;