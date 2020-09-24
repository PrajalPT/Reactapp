import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function RegisterForm() {
    return (
        <div className="loginform">
            <div>
                <TextField label="username" variant="outlined" style={{width: 310, marginTop:10}}/>
            </div>
            <div>
                <TextField label="name" variant="outlined" style={{width: 310, marginTop:10}}/>
            </div>  
            <div>
                <TextField label="address" variant="outlined" style={{width: 310, marginTop:10}}/>
            </div>
            <div>
                <TextField label="phone no" variant="outlined" style={{width: 310, marginTop:10}}/>
            </div>
            <div>
                <TextField label="password" variant="outlined" style={{width: 310, marginTop:10}}/>
            </div>
            <div>
                <TextField label="confirm password" variant="outlined" style={{width: 310, marginTop:10}}/>
            </div>  
        </div>
    )
}
