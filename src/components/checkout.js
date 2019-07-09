import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// done with Bootstrap modal

class Checkout extends Component {

    state = {
        errorMessage: '',
        email: '',
        password: '',
        errFlag: false,
        basket: this.props.basket
    };


    signIn = () => {
        var details = {}
        details.email = this.state.email
        details.password = this.state.password

        if (details.password === "") { this.setState({ errorMessage: "Wrong password, please re-enter" }) }
        if (details.email === "") { this.setState({ errorMessage: "Email address not found, please re-enter or register" }) }

        if (details.password !== "" & details.email !== "") {
            this.props.signIn(details)
            this.setState({ errFlag: true })
        }
    }

    makepayment = (amount) => {
        alert(`Send payment gateway £${amount}`)
              this.setState({basket:[]})
        this.props.checkedOut(amount)
    }

    handleChange = (event) => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value,
            errorMessage: '',
            errFlag: false
        })
    }

    totalPrice = () => {
        var totalPrice = 0
        const basket = this.state.basket
        for (let i = 0; i < basket.length; i++) {
            totalPrice = totalPrice + (basket[i].qty * basket[i].cost)
        }
        return totalPrice
    }

    totalItems = () => {
        var total = 0
        for (let i = 0; i < this.state.basket.length; i++) {
            total = total + this.state.basket[i].qty
        }
        return total
    }

    render() {

        const remItem = (id) => {
            var newBasket = this.state.basket.filter((item, index) => (index !== id))
            this.setState({ basket: newBasket })
            this.props.remItem(newBasket)
        }

        var products = this.state.basket.map(((elem, i) => {
            return (
                <li key={i} className="listNoDot">
                    <span>
                        <button onClick={() => { remItem(i) }} className="trashcan"><i className="fa fa-trash"></i></button>
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
                            <input 
                            controlid="formBasicPassword"
                            type="password" name="password"
                                placeholder="Enter your password"
                                onChange={this.handleChange}
                                className="form-control registerTextBox">
                            </input>

                            {this.props.error && this.state.errFlag &&
                                <p className="redText centered">Details not found, please try again</p>
                            }

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
            </>
        );
    }
}


export default Checkout;