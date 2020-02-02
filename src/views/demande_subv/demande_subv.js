import React,{Component} from "react";
import NavbarComponent from "../../components/navbar/navbar";
import addregisterStyle from "../signup/addregisterStyle";

export default class Demande_subv extends Component{
    constructor(props) {
        super(props);
        this.state={
            errorComponent:''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render() {
        return (
            <div>
                <NavbarComponent/>
                <p className="card-title" style={addregisterStyle.signup}>Demande Subvention</p>
                <div style={addregisterStyle.formContainer}>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card">
                                <div style={addregisterStyle.inputContainer}>
                                    <div className="card-content">
                                        <div>
                                            <p className={'center'}>Nom du projet</p>
                                            <input type={'text'} onChange={this.handleChange}
                                                   style={addregisterStyle.inputContainer}
                                                   name={'nomProjet'} placeholder={'Votre Nom Projet ...'} required={true}/>
                                        </div>
                                        <p className={'center'}>Nom</p>
                                        <input type={'text'} onChange={this.handleChange}
                                               style={addregisterStyle.inputContainer} disabled={true}
                                               name={'name'} placeholder={'Votre nom ...'} required={true} value={localStorage.getItem('name')}/>
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
            </div>
        );
    }
}
