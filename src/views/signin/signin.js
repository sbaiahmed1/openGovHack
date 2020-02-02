import React, {Component} from "react";
import addSigninStyle from './addSigninStyle';
import {browserHistory} from "react-router";
import NavbarComponent from "../../components/navbar/navbar";
import axios from 'axios'

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.props);
        let uri = 'http://127.0.0.1:8000/api/users/login';
        let config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        const courses = {
            email: this.state.email,
            password: this.state.password
        };
        await axios.post(uri, courses, config).then((response) => {
            if (response.data.toString() === 'userDoesnt') {
                console.log(response.data.toString());
                this.setState({
                    addingStatus: 'Login falied 😕 Try again 😏',
                })
            } else {
                let name = response.data[0].name;
                let lname = response.data[0].lastName;
                let type = response.data[0].type;
                let creds = name[0] + lname[0];
                const vars = {
                    globalName: name,
                    globalLast: lname,
                    globalType: type,
                    globalCreds: creds
                };
                this.setState({
                    addingStatus: 'Login successfully 🥰 , Redirecting',
                    vars: vars
                });
                localStorage.setItem('name',this.state.vars.globalName);
                localStorage.setItem('last',this.state.vars.globalLast);
                localStorage.setItem('creds',this.state.vars.globalCreds);
                localStorage.setItem('type',this.state.vars.globalType);
                localStorage.setItem('loggedIn',true);
                alert(localStorage.getItem('type'))
                setTimeout(function () {
                    browserHistory.push('/')
                }, 3000)
            }

        }).catch(error => {
            console.log(error);
            this.setState({addingStatus: 'Something went wrong 😕 Try again 😏'})
        });
        console.log(this.props)

    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <div>
                <NavbarComponent/>
                <p className="card-title" style={addSigninStyle.signin}>Sign in</p>
                <div style={addSigninStyle.formContainer}>
                    <div className="row">
                        <div className="col s8 m5">
                            <div className="card">
                                <div style={addSigninStyle.inputContainer}>
                                    <div className="card-content">
                                        <p className={'center'}>Identifiant</p>
                                        <input type={'email'} placeholder={'Votre identifiant ... '}
                                               style={addSigninStyle.inputContainer} name={'email'}
                                               onChange={this.handleChange}/>
                                        <p className={'center'}>Mot de passe</p>
                                        <input type={'password'} placeholder={'Votre mot de passe ...'}
                                               onChange={this.handleChange} name={'password'}
                                               style={addSigninStyle.inputContainer}/>
                                    </div>
                                </div>
                                <div className={'center'}>
                                    <div className="card-action">
                                        <p>{this.state.addingStatus}</p>
                                        <button type={'submit'} className="btn center"
                                                onClick={this.handleSubmit}>Connexion
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default Signin;
