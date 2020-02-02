import React, {Component} from "react";
import addregisterStyle from './addregisterStyle';
import NavbarComponent from "../../components/navbar/navbar"
import axios from "axios";
import {browserHistory} from "react-router";
import Select from 'react-select'

const options = [
    {value: 'Ariana', label: 'Ariana'},
    {value: 'Béja', label: 'Béja'},
    {value: 'Ben Arous', label: 'Ben Arous'},
    {value: 'Bizerte', label: 'Bizerte'},
    {value: 'Gabès', label: 'Gabès'},
    {value: 'Gafsa', label: 'Gafsa'},
    {value: 'Jendouba', label: 'Jendouba'},
    {value: 'Kairouan', label: 'Kairouan'},
    {value: 'Kasserine', label: 'Kasserine'},
    {value: 'Kébili', label: 'Kébili'},
    {value: 'Le Kef', label: 'Le Kef'},
    {value: 'Mahdia', label: 'Mahdia'},
    {value: 'La Manouba', label: 'La Manouba'},
    {value: 'Médenine', label: 'Médenine'},
    {value: 'Monastir', label: 'Monastir'},
    {value: 'Nabeul', label: 'Nabeul'},
    {value: 'Sfax', label: 'Sfax'},
    {value: 'Sidi Bouzid', label: 'Sidi Bouzid'},
    {value: 'Siliana', label: 'Siliana'},
    {value: 'Sousse', label: 'Sousse'},
    {value: 'Tataouine', label: 'Tataouine'},
    {value: 'Tozeur', label: 'Tozeur'},
    {value: 'Tunis', label: 'Tunis'},
    {value: 'Zaghouan', label: 'Zaghouan'}
];

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            lastName: null,
            password: null,
            c_password: '',
            email: '',
            password_status: '',
            errorComponent: '',
            type: '',
            mf:'',
            region:'',
            matricule:''

        };
        this.verifyPassword = this.verifyPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }

// --------------------------------------------------------------------------------
    verifyPassword = () => {

        if (this.state.password !== this.state.c_password) {
            this.setState({
                password_status: 'Passwords Mismatch',
                errorComponent: <p className={'center red'}>Password Mismatch</p>

            });
        } else {
            this.setState({
                password_status: 'Passwords match',
                errorComponent: <p className={'center green'}>Password Match</p>
            });

        }
    };
    // ----------------------------------------------------------------------------------
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    // --------------------------------------------------------------------------
    handleSubmit = async (e) => {
        e.preventDefault();
        let uri = 'http://127.0.0.1:8000/api/users/create';
        let config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        const courses = {
            matricule:this.state.matricule,
            name: this.state.name,
            lastName: this.state.lastName,
            region: this.state.region,
            email: this.state.email,
            type: this.state.type,
            password: this.state.password
        };
        axios.post(uri, courses, config).then((response) => {
            console.log(response);
            this.setState({addingStatus: 'User Created successfully 🥰 Login Please '});
            setTimeout(function () {
                browserHistory.push('/')
            }, 3000)
        }).catch(error => {
            console.log(error);
            this.setState({addingStatus: 'Something went wrong 😕 Try again 😏'})
        });
    };

    // ----------------------------------------------------------------------------
    setType(e) {
        console.log(e.target.value);
        this.setState({
            type: e.target.value,
        });
        if (e.target.value == 'citoyen') {
            this.setState({
                mf: true
            });
        } else {
            this.setState({
                mf: false
            })
        }
    }

    // --------------------------------------------------------------------------------


    //---------------------------------------------------------------------------------
    render() {
        return (
            <div>
                <NavbarComponent/>
                <p className="card-title" style={addregisterStyle.signup}>Sign up</p>
                <div style={addregisterStyle.formContainer}>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div style={addregisterStyle.inputContainer}>
                                    <div className="card-content">
                                        <div hidden={this.state.mf}>
                                            <p className={'center'}>Matricule Fiscale</p>
                                            <input type={'text'} onChange={this.handleChange}
                                                   style={addregisterStyle.inputContainer}
                                                   name={'matricule'} placeholder={'Votre matricule fiscale ...'} required={true}/>
                                        </div>
                                        <p className={'center'}>{this.state.mf? <p>Nom</p> : <p>Nom </p>}</p>
                                        <input type={'text'} onChange={this.handleChange}
                                               style={addregisterStyle.inputContainer}
                                               name={'name'} placeholder={'Votre nom ...'} required={true}/>
                                        <p className={'center'} hidden={!this.state.mf}>Prenom</p>
                                        <input hidden={!this.state.mf} type={'text'} onChange={this.handleChange}
                                               style={addregisterStyle.inputContainer}
                                               name={'lastName'} placeholder={'Votre prenom'}/>
                                        <p className={'center'}>Email</p>
                                        <input type={'email'} style={addregisterStyle.inputContainer}
                                               onChange={this.handleChange} placeholder={'Votre email'} name={'email'}/>
                                        <div hidden={!this.state.mf}>
                                            <Select options={options}
                                                    onChange={value => this.setState({ region:value.value })}/>
                                        </div>
                                        <p className={'center'}>Mot de passe</p>
                                        <input type={'password'} name={'password'} placeholder={'Votre mot de passe'} onChange={this.handleChange}
                                               style={addregisterStyle.inputContainer}/>
                                        <p className={'center'}>Confirmer mot de passe</p>
                                        <input type={'password'} name={'c_password'} placeholder={'confirmer le mot de passe'} onChange={this.handleChange}
                                               onBlur={this.verifyPassword}
                                               style={addregisterStyle.inputContainer}/>
                                        <div className={'center'}>
                                            <p onChange={this.setType.bind(this)}>
                                                <label>
                                                    <input className="with-gap" name="group3" type="radio"
                                                           value={'citoyen'}/>
                                                    <span>Citoyen</span>
                                                </label>
                                                <label>
                                                    <input className="with-gap" name="group3" type="radio"
                                                           value={'ministere'}/>
                                                    <span>Ministere  </span>
                                                </label>
                                                <label>
                                                    <input className="with-gap" name="group3" type="radio"
                                                           value={'commune'}/>
                                                    <span>Commune  </span>
                                                </label>
                                                <label>
                                                    <input className="with-gap" name="group3" type="radio"
                                                           value={'crc'}/>
                                                    <span>CRC</span>
                                                </label>

                                            </p>
                                        </div>
                                        <div>{this.state.errorComponent}</div>
                                        <div className="center">{this.state.addingStatus}</div>
                                    </div>
                                </div>
                                <div className={'center'}>
                                    <div className="card-action">
                                        <button type={'submit'} className="btn center"
                                                onClick={this.handleSubmit}>Register
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

export default Signup
