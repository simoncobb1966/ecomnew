import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
// done with Bootstrap modal
class Enterproduct extends Component {

    // constructor(props, context) {
    //     super(props, context);

    state = {
        // show: false,
        errorMessage: '',
        title: '',
        sku: '',
        image: '',
        description: '',
        price: '',
        priceblu: '',
        stockdvd: '',
        stockblu: '',
        synopsis: '',
    };


    // this.handleChange = this.handleChange.bind(this);
    //  }

    submit = () => {
        var errorMessage = ""
        // if (this.state.password === "") { errorMessage = "Please enter your PASSWORD" }
        // if (this.state.email === "") { errorMessage = "Please enter your EMAIL address" }
        // if (this.state.address5 === "") { errorMessage = "Please enter your POST CODE" }
        // // if (this.state.address3 === "") { errorMessage = "Please enter the THIRD line of your address" }
        // // if (this.state.address2 === "") { errorMessage = "Please enter the SECOND line of your address" }
        // if (this.state.address1 === "") { errorMessage = "Please enter the FIRST line of your address" }
        // if (this.state.secondName === "") { errorMessage = "Please enter your SECOND NAME" }
        // if (this.state.firstName === "") { errorMessage = "Please enter your FIRST NAME" }
        // this.setState({ errorMessage: errorMessage })
        if (errorMessage==="") {
            var copyState=this.state
            // copyState.firstName=copyState.firstName.charAt(0).toUpperCase() + copyState.firstName.slice(1)
            // copyState.secondName=copyState.secondName.charAt(0).toUpperCase() + copyState.secondName.slice(1)        
            this.props.enterProduct(copyState)}
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
                {/* <element> */}

                    <Modal show={this.props.openClose} onHide={this.props.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add new product to the product database</Modal.Title>
                        </Modal.Header>

                        <form onSubmit={this.handleSubmit} className="createAccount">
                            <input type="text" name="title"
                                placeholder="Product Tile "
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="sku"
                                placeholder="Product SKU"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="image"
                                placeholder="Image name"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="synopsis"
                                placeholder="Product description"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="price"
                                placeholder="Price DVD"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="priceblu"
                                placeholder="Price Bluray"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="stockdvd"
                                placeholder="Total number of DVDs of this title in stock"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="stockblue"
                                placeholder="Total number of DVDs of this title in stock"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            {/* <input type="text" name="synopsis"
                                placeholder="Synopsis"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input> */}

                            <p className="redText centered">{this.state.errorMessage}</p>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.endAdmin}>
                                    EXIT ADMIN MODE
            </Button>
                                <Button onClick={this.submit} variant="primary" >
                                    ADD PRODUCT
            </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                {/* </element> */}
            </>
        );
    }
}

export default Enterproduct;