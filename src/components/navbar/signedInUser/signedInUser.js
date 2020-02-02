import React,{Component} from "react";
import {Link} from "react-router";

class SignedInUser extends Component{
    render() {
        return (
            <ul className="right">
                <li><Link to='/signup' style={{color:'#d4e059'}}>help</Link></li>
                <li><Link style={{color:'#d4e059'}} to='/login'>add</Link></li>
            </ul>
        );
    }
}
export default SignedInUser
