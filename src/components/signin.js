import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// done with Bootstrap modal
class SignIn extends Component {

    // constructor(props, context) {
    //     super(props, context);

    state = {
        // show: false,
        errorMessage: '',
        email: '',
        password: ''
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

    signInHandler = (customerList) => {
        var details = {
            email: "",
            password: ""
        }
        const signIn = this.props.signIn
        const email = this.state.email
        const password = this.state.password
if (email==="admin" && password==="admin"){
    details.email = "admin"
    details.password = "admin"
    signIn(details)
}
        customerList.forEach(function (item, i) {
            if (item.email === email) {
                details.email = item.email
                if (item.password === password) {
                    details.password = item.password
                    signIn(details)
                }
            }
        })

        


        if (details.password === "") { this.setState({ errorMessage: "Wrong password, please re-enter" }) }
        if (details.email === "") { this.setState({ errorMessage: "Email not find, please re-enter or register" }) }
    }

    render() {
        return (
            <>
                <element>

                    <Modal show={this.props.openClose} onHide={this.props.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sign in to James Bond Shop</Modal.Title>
                        </Modal.Header>

                        <Form onSubmit={this.handleSubmit} className="createAccount">

                            Email
                            <Form.Control onChange={this.handleChange} name="email" />

                            Password
                            <Form.Control type="password" controlId="formBasicPassword" onChange={this.handleChange} name="password" />

                            <p className="redText centered">{this.state.errorMessage}</p>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.closeModal}>
                                    Cancel
            </Button>
                                <Button variant="primary" onClick={() => this.signInHandler(this.props.customerList)} >
                                    Sign In
            </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </element>
            </>
        );
    }
}


export default SignIn;