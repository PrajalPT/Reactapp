import React from 'react'
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import {updateState} from "../actions/actions";

class LoginForm extends React.Component {

    render() {

        const handleChange = (event) => {
            this.props.updateState(event.target.name, event.target.value);
        }

        return (
                <div className="loginform">
                    <div>
                        <TextField 
                            name="username"
                            onChange={handleChange}
                            label="username" 
                            variant="outlined" 
                            style={{width: 310, marginTop:10}}/>
                    </div>
                    <div>
                        <TextField 
                            name="password"
                            label="password" 
                            variant="outlined" 
                            style={{width: 310, marginTop:10}}/>
                    </div>
                    <div>
                        <TextField 
                            name="phoneno"
                            label="phone no" 
                            variant="outlined" 
                            style={{width: 310, marginTop:10}}/>
                    </div> 
                </div>
            )
        }
}

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = () => ({
    updateState
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm);