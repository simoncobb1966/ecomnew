import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
class SignIn extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: ''
    };

    handleChange = (event) => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value,
            errorMessage: ''
        })
    }

    signInHandler = () => {
        var details = {}
        details.email = this.state.email
        details.password = this.state.password
        if (details.password === "") {
            this.setState({
                errorMessage: "Invalid Password"
            })
        }
        if (details.email.length < 5) {
            this.setState({
                errorMessage: "Invalid Email Address"
            })
        }
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

                        {(this.state.errorMessage.length > 0) &&
                            <p className="redText centered">{this.state.errorMessage}</p>
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