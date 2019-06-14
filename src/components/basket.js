import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
// import { isThisExpression } from '@babel/types';
// done with Bootstrap modal
class Basket extends Component {

    // constructor(props, context) {
    //     super(props, context);

    state = {
        // show: false,
        errorMessage: '',
        email: '',
        password: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    //  }

    handleChange = (event) => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value,
            errorMessage: ''
        })
    }

    totalPrice = () => {
        var totalPrice = 0
        const basket = this.props.basket
        for (let i = 0; i < basket.length; i++) {
            totalPrice = totalPrice + (basket[i].qty * basket[i].cost)
        }
        return totalPrice
    }

    totalItems = () => {
        var total = 0
        for (let i = 0; i < this.props.basket.length; i++) {
            total = total + this.props.basket[i].qty
        }
        return total
    }

    render() {

        const products = this.props.basket.map(function (elem, i) {
            return (

                <li key={i} className="shoppingbasket">
                    <span>
                        {elem.qty}{" x "}
                        {elem.title.slice(0,10)}{" "}
                        {elem.format}{" @ £"}
                        {elem.cost}{" each"}

                    </span>
                    <span className="shoppingbasket-right">
                        {" = £"}{elem.cost * elem.qty}
                    </span>
                </li>

            )
        })

        return (
            <>
                <element>

                    <Modal show={this.props.openClose} onHide={this.props.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Shopping Basket</Modal.Title>
                        </Modal.Header>

                        <p className="shoppingbasket"> Number of items in basket {this.totalItems()}</p>

                        {products}
                        <p></p>
                        <p className="shoppingbasket-right">
                            <strong>TOTAL PRICE = £{this.totalPrice()}</strong>
                        </p>
{(!this.props.login) && (this.totalItems()>0) &&
<p className="shoppingbasket redText">Please SIGN IN or REGISTER to enable checkout.</p>
}


                        <Modal.Footer>
                            <Button onClick={this.props.closeModal}>
                                Close
            </Button>
                            {(!this.props.login) &&
                                <>
                                    <Button onClick={() => { this.props.openModal("register") }} >REGISTER
                            </Button>
                                    <Button onClick={() => { this.props.openModal("signin") }} >Sign In
            </Button>
                                </>
                            }
                            {(this.props.login) && this.props.basket > 1 &&
                                <Button onClick={() => { this.props.openModal("signin") }} >CHECKOUT
                            </Button>
                            }
                        </Modal.Footer>
                    </Modal>
                </element>
            </>
        );
    }
}

export default Basket;