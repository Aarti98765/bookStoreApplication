import React, { Component } from 'react';
import { Icon } from '@opuscapita/react-icons';
import BookDataLayer from '../BookDataLayer';
import { Link } from 'react-router-dom';

var data = new BookDataLayer();

class ResetPassword extends Component {
    constructor() {
        super()
        this.state = {
            password: '',
            confirmPassword: '',
            toggle: false,
            confirmToggle: false
        }
    }

    async componentDidMount() {
        var currentUrl = window.location.href;
        console.log(currentUrl)
        var token = currentUrl.slice(36)
        await console.log(token)
        localStorage.setItem("token", token)
    }

    handleClick = () => {
        this.props.history.push('/SignInForm')
    }

    handleClickOfSetNewPassword = async (e) => {
        await this.setState({
            password: e.target.value
        })
        console.log(this.state.password)
    }

    handleClickOfConfirmPassword = async (e) => {
        await this.setState({
            confirmPassword: e.target.value
        })
        console.log(this.state.confirmPassword)
    }

    handleClickOfSubmitPassword = async() => {
        if (this.state.password === this.state.confirmPassword) {
           await data.resetPassword(this.state.password)
            await this.setState({
                confirmToggle: true
            })
            localStorage.removeItem("token");
        }
        else {
            await this.setState({
                toggle: true
            })
            window.location.reload(true)
        }
    }
    
    render() {
        return(
            <div>
            <div style={{ marginTop:'35px', marginLeft: '300px', marginRight:'314px', backgroundColor:'brown' }}>
                <div style={{ display:'flex', flexDirection:'column'}}>
                <div style={{ marginLeft:'15px', marginRight:'40px', marginTop:'30px', marginBottom:'30px'}}>
                <div style={{marginLeft:'120px'}}><Icon type="indicator" name="user" height="50px" /></div>
                <text style={{marginLeft:'72px'}}>Reset Password</text>
                <input placeholder="                     New Password" style={{width:'235px', height:'23px', marginTop:'20px', marginLeft:'5px', borderBottom:'brown', borderRight:'brown', borderLeft:'brown', borderTop:'brown'}} onChange={(e) => this.handleClickOfSetNewPassword(e)}></input>
                <input placeholder="                 Confirmed Password" style={{width:'235px', marginTop:'10px', height:'23px', marginLeft:'5px', borderBottom:'brown', borderRight:'brown', borderLeft:'brown', borderTop:'brown' }} onChange={(e) => this.handleClickOfConfirmPassword(e)}></input>

                <Link to='/SignInForm'>
                    <button style={{ backgroundColor:'blue', width:'100px', height:'25px', marginLeft:'83px', marginTop:'20px', borderBottom:'brown', borderRight:'brown', borderLeft:'brown', borderTop:'brown' }} onClick={this.handleClickOfSubmitPassword}>Submit</button>
                    </Link>
                
                { this.state.toggle && window.alert("Your password and confirmation password do not match!! Please try again.") }
                </div>    
            </div>
            </div>
            </div>
        )
    }
}

export default ResetPassword