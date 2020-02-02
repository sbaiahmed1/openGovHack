import React,{Component} from "react";
import {Link} from "react-router";

class SignedOutUser extends Component{
    render() {
        return (
            <ul className="right">
                <li><Link to='/signup' style={{color:'#d4e059'}}>SignUp</Link></li>
                <li><Link style={{color:'#d4e059'}} to='/login'>Login</Link></li>
            </ul>
        );
    }
}
export default SignedOutUser;
