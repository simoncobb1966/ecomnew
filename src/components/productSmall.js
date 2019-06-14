import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
 import Dialog from '@material-ui/core/Dialog';
 import DialogActions from '@material-ui/core/DialogActions';
 import DialogContent from '@material-ui/core/DialogContent';
 import DialogContentText from '@material-ui/core/DialogContentText';
 import DialogTitle from '@material-ui/core/DialogTitle';


class ProductSmall extends Component {

    addtobasket = (sku,button,close=false) => {
        if (close) {this.handleClose()}
        if (button==="dvd") {
        this.props.addDVDToBasket(sku)
        }
        if (button==="blu") {
        this.props.addBluToBasket(sku)
        }
        }

    handleClickOpen = (event) => {
        this.setState({ open: true });
    };

    handleClose = (buttonName) => {
         this.setState({ open: false });
        // if (this.props.buttonHandlerFunction(buttonName) === "close") {
        //     return
        // }
        // this.props.buttonHandlerFunction(buttonName)
    };

    state = {
        hover: "normal centered",
        open: false
    }

    title = () => {
        if (this.props.jb.title.length < 11) {
            return "bigtitle"
        } else {
            if (this.props.jb.title.length < 21)
                return "mediumtitle"
        }
        return "smalltitle"
    }

    onMouseEnter = () => {
        this.setState({
            hover: "hover centered"
        });
    }

    onMouseLeave = () => {
        this.setState({
            hover: "normal centered"
        })
    }

    render() {
        var dir = require('./images/product/' + this.props.jb.image);

        return (

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">

                 <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle className="centered" id="alert-dialog-title"><strong>{this.props.jb.title}</strong></DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.jb.synopsis}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button value="close" onClick={this.handleClose} variant="outlined" >
                            Close
                        </Button>
                        <Button value="buydvd" onClick={(e)=> {this.addtobasket(this.props.jb.sku,"dvd",true)}} variant="contained" color="secondary" >
                        Add DVD to basket £{this.props.jb.price}
                        </Button>
                        <Button value="buybluray" onClick={(e)=> {this.addtobasket(this.props.jb.sku,"blu", true)}} variant="contained" color="primary" >
                        Add BluRay to basket £{this.props.jb.priceblu}
                        </Button>

                    </DialogActions>
                </Dialog> 

                <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className={this.state.hover}>

                    <div onClick={this.handleClickOpen} className="productnamebox">
                        <h4 className="{this.title()} title">{this.props.jb.title}</h4>
                    </div>

                    <div>
                        <img onClick={this.handleClickOpen} className="thumbnail img-fluid centered" src={dir} alt={this.props.jb.title}></img>
                    </div>

                    <div className="small-description">
                        {this.props.jb.synopsis.slice(0, 70)}
                        <span className="dotdotbuton"><Button onClick={(e)=> this.handleClickOpen(e)} size="small" color="primary" className="dotdotbuton">MORE..</Button></span>
                    </div>
                    <div className="centered"> 




                        <button value={this.props.value} onClick={(e)=> {this.addtobasket(this.props.jb.sku,"dvd")}} type="button" className="btn btn-danger badge-spaced">
                            Add DVD to basket <span className="badge badge-light">£{this.props.jb.price}</span>
                        </button>
                        <button value={this.props.value} onClick={(e)=> {this.addtobasket(this.props.jb.sku,"blu")}} type="button" className="btn btn-primary badge-spaced">
                            Add BluRay to basket <span className="badge badge-light">£{this.props.jb.priceblu}</span>
                        </button> 
                     </div> 

                </div>
            </div>
        )
    }
}



export default ProductSmall;