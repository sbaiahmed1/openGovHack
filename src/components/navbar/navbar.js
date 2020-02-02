import React, {Component} from 'react';
import {Link} from "react-router";
import SignedInUser from './signedInUser/signedInUser'
import SignedOutUser from "./signedOutUser/signedOutUser";

const digicom = require('../../assets/logo_digicom.png');

export default class NavbarComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let buttonsControl;
        if (this.props.isLogged === 'true') {
            buttonsControl = <SignedInUser/>
        } else {
            buttonsControl = <SignedOutUser/>
        }
        return (
            <div className="navbar-expand fixed-top">
                <nav className="nav-wrapper white darken-3">
                    <div className="container">
                        <Link to='/' className='brand-logo center'>
                            <img src={digicom} style={{height: 50, width: 100}}/>
                        </Link>
                    </div>
                    <div className={'right'}>
                        {buttonsControl}
                    </div>
                </nav>
            </div>
        );
    }
}
