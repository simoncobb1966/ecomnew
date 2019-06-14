import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// done with Bootstrap modal

class Accountdetails extends Component {

    state = {
        errorMessage: 'All starred items must be completed',
        firstName: this.props.customer.firstName,
        secondName: this.props.customer.secondName,
        address1: this.props.customer.address1,
        address2: this.props.customer.address2,
        address3: this.props.customer.address3,
        address4: this.props.customer.address4,
        address5: this.props.customer.address5,
        email: this.props.customer.email,
        password: this.props.customer.password,
        set: false,
    }


    handleChange = (event) => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value,
            errorMessage: ''
        })
    }

    signInHandler = (customer) => {   
        var details = {}
        var error = ""
        details.oldEmail=this.props.customer.email
        if (this.state.firstName.length < 1) { details.firstName = this.props.customer.firstName } else { details.firstName = this.state.firstName }
        if (this.state.secondName.length < 1) { details.secondName = this.props.customer.secondName } else { details.secondName = this.state.secondName }
        if (this.state.address1.length < 1) { details.address1 = this.props.customer.address1 } else { details.address1 = this.state.address1 }
        if (this.state.address2.length < 1) { details.address2 = this.props.customer.address2 } else { details.address2 = this.state.address2 }
        if (this.state.address3.length < 1) { details.address3 = this.props.customer.address3 } else { details.address3 = this.state.address3 }
        if (this.state.address4.length < 1) { details.address4 = this.props.customer.address4 } else { details.address4 = this.state.address4 }
        if (this.state.address5.length < 1) { details.address5 = this.props.customer.address5 } else { details.address5 = this.state.address5 }
        if (this.state.email.length < 1) { details.email = this.props.customer.email } else { details.email = this.state.email }
        if (this.state.password.length < 1) { details.password = this.props.customer.password } else { details.password = this.state.password }

        if (details.password.length < 2) { error = "Please enter your PASSWORD" }
        if (details.email.length < 5) { error = "Please enter your EMAIL address" }
        if (details.address5.length < 2) { error = "Please enter your POST CODE" }
        if (details.address4.length < 2) { error = "Please enter your TOWN/CITY" }
        if (details.address1.length < 2) { error = "Please enter the FIRST line of your address" }
        if (details.secondName.length < 2) { error = "Please enter your SECOND name" }
        if (details.firstName.length < 2) { error = "Please enter your FIRST name" }
        if (error === "") { this.props.accountDetailsHandler(details) }

        this.setState({
            errorMessage: error
        })
    }

    render() {


        return (
            <>
                <element>

                    <Modal show={this.props.openClose} onHide={this.props.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Account Details</Modal.Title>
                        </Modal.Header>


                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                                    <p className="accDetails">First Name *</p>
                                    <Form.Control onChange={this.handleChange} name="firstName" className="createAccountspan " placeholder={this.props.customer.firstName} />
                                </Col>
                                <Col>
                                    <p className="accDetails2">Second Name *</p>
                                    <Form.Control onChange={this.handleChange} name="secondName" placeholder={this.props.customer.secondName} />
                                </Col>
                            </Row>
                            <p className="accDetails1">Address 1 *</p>
                            <Form.Control onChange={this.handleChange} name="address1" className="createAccount" placeholder={this.props.customer.address1} />
                            <p className="accDetails1">Address 2</p>
                            <Form.Control onChange={this.handleChange} name="address2" className="createAccount" placeholder={this.props.customer.address2} />
                            <p className="accDetails1">Address 3</p>
                            <Form.Control onChange={this.handleChange} name="address3" className="createAccount" placeholder={this.props.customer.address3} />
                            <Row>
                                <Col>
                                    <p className="accDetails">Town/City *</p>
                                    <Form.Control onChange={this.handleChange} name="address4" className="createAccountspan" placeholder={this.props.customer.address4} />
                                </Col>

                                <Col>
                                    <p className="accDetails2">Post Code *</p>
                                    <Form.Control onChange={this.handleChange} name="address5" placeholder={this.props.customer.address5} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="accDetails">Email *</p>
                                    <Form.Control onChange={this.handleChange} name="email" className="createAccountspan" placeholder={this.props.customer.email} />
                                </Col>
                                <Col>
                                    <p className="accDetails2">Password *</p>
                                    <Form.Control type="password" controlId="formBasicPassword" onChange={this.handleChange} name="password" placeholder="**********" />
                                </Col>
                            </Row>
                            <p className="redText centered"><strong>{this.state.errorMessage}</strong></p>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.closeModal}>
                                    Close
            </Button>
                                <Button variant="primary" onClick={() => this.signInHandler(this.props.customer)} >
                                    UPDATE DETAILS
            </Button>
                            </Modal.Footer>

                        </Form>
                    </Modal>
                </element>
            </>
        );
    }
}


export default Accountdetails;