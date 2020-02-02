import React, {Component} from "react";

class Header extends Component {
        constructor(props) {
            super(props);
            this.state={
                data:[]
            }
        }
    componentWillReceiveProps() {
            this.setState({
                data:this.props.data
            })
        }

    render() {
        return (
            <div className="col s4">
                <div className="center card" style={{backgroundColor: '#f5f5f5'}}>
                    <div className="card-content white-text">
                        <span className="card-title" style={{color:'black'}}>{this.props.title}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header
