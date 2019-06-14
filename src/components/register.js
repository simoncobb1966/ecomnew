import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
// done with Bootstrap modal
class Register extends Component {

    // constructor(props, context) {
    //     super(props, context);

    state = {
        // show: false,
        errorMessage: '',
        firstName: '',
        secondName: '',
        address1: '',
        address2: '',
        address3: '',
        address4: '',
        address5: '',
        email: '',
        password: '',
    };


    // this.handleChange = this.handleChange.bind(this);
    //  }

    submit = () => {
        var errorMessage = ""
        if (this.state.password === "") { errorMessage = "Please enter your PASSWORD" }
        if (this.state.email === "") { errorMessage = "Please enter your EMAIL address" }
        if (this.state.address5 === "") { errorMessage = "Please enter your POST CODE" }
        // if (this.state.address3 === "") { errorMessage = "Please enter the THIRD line of your address" }
        // if (this.state.address2 === "") { errorMessage = "Please enter the SECOND line of your address" }
        if (this.state.address1 === "") { errorMessage = "Please enter the FIRST line of your address" }
        if (this.state.secondName === "") { errorMessage = "Please enter your SECOND NAME" }
        if (this.state.firstName === "") { errorMessage = "Please enter your FIRST NAME" }
        this.setState({ errorMessage: errorMessage })
        if (errorMessage==="") {
            var copyState=this.state
            copyState.firstName=copyState.firstName.charAt(0).toUpperCase() + copyState.firstName.slice(1)
            copyState.secondName=copyState.secondName.charAt(0).toUpperCase() + copyState.secondName.slice(1)        
            this.props.register(copyState)}
    }

    handleChange = (event) => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value,
            errorMessage: ''
        })
    }

    render() {
        return (
            <>
                <element>

                    <Modal show={this.props.openClose} onHide={this.props.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Register with James Bond Shop</Modal.Title>
                        </Modal.Header>

                        <form onSubmit={this.handleSubmit} className="createAccount">
                            <input type="text" name="firstName"
                                placeholder="Enter your first name "
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="secondName"
                                placeholder="Enter your second name *"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="address1"
                                placeholder="Enter the first line of your address *"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="address2"
                                placeholder="Enter the second line of your address"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="address3"
                                placeholder="Enter the third line of your address"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="address4"
                                placeholder="Enter your TOWN/CITY *"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="address5"
                                placeholder="Enter your Post Code *"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="email"
                                placeholder="Enter your email *"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="password"
                                placeholder="Enter your password *"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>

                            <p className="redText centered">{this.state.errorMessage}</p>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.closeModal}>
                                    Cancel
            </Button>
                                <Button onClick={this.submit} variant="primary" >
                                    Register
            </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </element>
            </>
        );
    }
}

export default Register;