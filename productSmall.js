import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class ProductSmall extends Component {

    addtobasket = (button) => {
        if (button==="dvd") {
        this.props.buttonHandlerFunction("addtobasketdvd",this.props.indexkey,)
        }
        if (button==="blu") {
        this.props.buttonHandlerFunction("addtobasketblu",this.props.indexkey,)
        }
        }



    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = (buttonName) => {
        this.setState({ open: false });
        if (this.props.buttonHandlerFunction(buttonName) === "close") {
            return
        }
        this.props.buttonHandlerFunction(buttonName)
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

            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.props.jb.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.jb.synopsis}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button value="close" onClick={this.handleClose} variant="outlined" >
                            Close
                        </Button>
                        <Button value="buydvd" onClick={this.handleClose} variant="contained" color="secondary" >
                            Buy DVD price £{this.props.jb.pricedvd}
                        </Button>
                        <Button value="buybluray" onClick={this.handleClose} variant="contained" color="primary" >
                            Buy BluRay price £{this.props.jb.priceblu}
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
                        <span className="dotdotbuton"><Button onClick={()=> this.handleClickOpen} size="small" color="primary" className="dotdotbuton">........</Button></span>
                    </div>
                    <div className="centered"> 

                        <button onClick={()=> this.addtobasket("dvd")} type="button" className="btn btn-danger badge-spaced">
                            Add DVD to basket <span class="badge badge-light">£{this.props.jb.price}</span>
                        </button>
                        <button onClick={()=> this.addtobasket("blu")} type="button" className="btn btn-primary badge-spaced">
                            Add BluRay to basket <span class="badge badge-light">£{this.props.jb.priceblu}</span>
                        </button> 
                     </div> 

                </div>
            </div>
        )
    }
}



export default ProductSmall;