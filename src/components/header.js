import React, { Component } from 'react';
class Header extends Component {

    render() {
        const banner = require('./images/jb_banner.png');

        return (

                    <div className="row banner">
                            <img className="img-fluid borderdiv bannerrow" src={banner} alt="banner"></img>
                        </div>  

        )
    }
}
export default Header;