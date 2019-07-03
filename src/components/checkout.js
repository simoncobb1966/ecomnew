import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// done with Bootstrap modal

class Checkout extends Component {

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



    signIn = (customerList) => {
        var details = {
            email: "",
            index: -1,
            password: ""
        }
        // const setSignIn = this.props.setSignIn
        const email = this.state.email
        const password = this.state.password
        customerList.forEach(function (item, i) {
            if (item.email === email) {
                details.email = item
                details.index = i
                if (item.password === password) {
                    details.password = item.password
                    this.props.setSignIn(details)
                }
            }
        })

        if (details.password === "") { this.setState({ errorMessage: "Wrong password, please re-enter" }) }
        if (details.email === "") { this.setState({ errorMessage: "Email not find, please re-enter or register" }) }
    }

    makepayment = (amount) => {
        alert(`Send payment gateway £${amount}`)
        this.props.checkedOut(amount)
    }

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

    remItem = (id) => {
        alert(id)
    }

    render() {

        var products = this.props.basket.map(((elem, i) => {
            return (
                <li key={i} className="listNoDot">
                    <span>
                        <button onClick={() => { this.remItem(i) }} className="trashcan"><i className="fa fa-trash"></i></button>
                    </span>
                    <span>
                        {elem.qty}{" x "}
                        {elem.title.slice(0, 22)}{" "}
                        {elem.format}{" @ £"}
                        {elem.cost}{" each ="}
                    </span>
                    <span className="shoppingbasket-right">
                        {"£"}{elem.cost * elem.qty.toFixed(2)}
                    </span>
                </li>
            )

        }))





        return (
            <>
                {/* <element> */}

                <Modal show={this.props.openClose} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        {(this.totalItems() === 1) &&

                            <Modal.Title>CHECKOUT {this.totalItems()} ITEM</Modal.Title>
                        }
                        {(this.totalItems() !== 1) &&

                            <Modal.Title>CHECKOUT {this.totalItems()} ITEMS</Modal.Title>
                        }
                    </Modal.Header>

                    {/* <p className="shoppingbasket"><strong>Number of items in basket {this.totalItems()}</strong></p> */}

                    {products}
                    <p></p>
                    <div >
                        <p className="shoppingbasket-right1">
                            <strong>TOTAL PRICE = £{this.totalPrice().toFixed(2)}</strong>
                        </p>
                    </div>
                    {(!this.props.login) &&
                        <form onSubmit={this.handleSubmit} className="createAccount">
                            <p className="shoppingbasket">If you already have an account enter your LOGIN details otherwise press the REGISTER to enter your details</p>
                            <input type="text" name="email"
                                placeholder="Enter your email"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            <input type="text" name="password"
                                placeholder="Enter your password"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>
                            {this.state.errorMessage.length > 1 &&
                                <p className="redText centered">{this.state.errorMessage}</p>
                            }
                            <Button variant="success" onClick={() => { (this.signIn(this.props.customerList)) }} > SIGN IN
                                    </Button>
                        </form>

                    }

                    {/* CUSTOMER DETAILS */}
                    {this.props.login &&
                        <>
                            <li className="shoppingbasket"><strong>CUSTOMER DETAILS</strong></li>
                            <li className="shoppingbasket">{this.props.customer.firstName}{" "}{this.props.customer.secondName}</li>
                            <li className="shoppingbasket">{this.props.customer.address1}</li>
                            <li className="shoppingbasket">{this.props.customer.address2}</li>
                            <li className="shoppingbasket">{this.props.customer.address3}</li>
                            <li className="shoppingbasket">{this.props.customer.address4}</li>
                            <li className="shoppingbasket">{this.props.customer.address5}</li>
                            <li className="shoppingbasket">{this.props.customer.address6}</li>
                        </>
                    }

                    {(this.totalItems() > 0) &&
                        <div className="centerbutton">
                            {this.props.login &&
                                <Button className="payButton" color="secondary" onClick={() => { this.makepayment(this.totalPrice()) }} >PAY £{this.totalPrice()} NOW
                                    </Button>
                            }
                            {/* <p></p> */}
                        </div>
                    }
                    <Modal.Footer>
                        {this.props.login &&
                            <Button onClick={() => { this.props.logOut() }} >LOG OUT
                                    </Button>
                        }


                        <Button variant="secondary" onClick={this.props.closeModal}>
                            Close
                            </Button>
                        {(!this.props.login) &&
                            <>
                                <Button onClick={() => { this.props.openModal("register") }} >REGISTER
                                    </Button>
                                {/* <Button onClick={() => { this.props.openModal("signin") }} >Sign In
                                    </Button> */}
                            </>
                        }
                        {(this.props.login) && this.props.basket > 1 &&
                            <Button onClick={() => { this.props.openModal("signin") }} >CHECKOUT
                                </Button>
                        }

                    </Modal.Footer>
                </Modal>
                {/* </element> */}
            </>
        );
    }
}


export default Checkout;