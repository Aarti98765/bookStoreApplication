import React, { Component } from 'react';
import { Icon } from '@opuscapita/react-icons';

class ResetPassword extends Component {
    handleClick = () => {
        this.props.history.push('/SignInForm')
    }
    render() {
        return(
            <div>
            <div style={{ marginTop:'35px', marginLeft: '300px', marginRight:'314px', backgroundColor:'brown' }}>
                <div style={{ display:'flex', flexDirection:'column'}}>
                <div style={{ marginLeft:'15px', marginRight:'40px', marginTop:'30px', marginBottom:'30px'}}>
                <div style={{marginLeft:'120px'}}><Icon type="indicator" name="user" height="50px" /></div>
                <text style={{marginLeft:'72px'}}>Reset Password</text>
                <input placeholder="                     New Password" style={{width:'235px', height:'23px', marginTop:'20px', marginLeft:'5px', borderBottom:'brown', borderRight:'brown', borderLeft:'brown', borderTop:'brown'}}></input>
                <input placeholder="                 Confirmed Password" style={{width:'235px', marginTop:'10px', height:'23px', marginLeft:'5px', borderBottom:'brown', borderRight:'brown', borderLeft:'brown', borderTop:'brown' }}></input>
                <button style={{ backgroundColor:'blue', width:'100px', height:'25px', marginLeft:'83px', marginTop:'20px', borderBottom:'brown', borderRight:'brown', borderLeft:'brown', borderTop:'brown' }} onClick={this.handleClick}>Login</button>
                </div>    
            </div>
            </div>
            </div>
        )
    }
}

export default ResetPassword