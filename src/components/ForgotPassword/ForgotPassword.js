import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@opuscapita/react-icons';
import BookDataLayer from '../BookDataLayer';

var data = new BookDataLayer();

class ForgotPassword extends Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }
    }

    handleChangeEmailId = async (event) => {
        await this.setState({
            email: event.target.value
        })
        console.log(this.state.email);
    }

    handleSendLinkView = () => {
        data.forgotPassword(this.state.email)
    }

    render() {
        return (
            <div>
                <div style={{ marginTop: '35px', marginLeft: '300px', marginRight: '314px', backgroundColor: 'brown' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginLeft: '137px', marginTop: '20px' }}><Icon type="indicator" name="locked" height='50px' /> </div>
                        <div style={{ marginLeft: '15px', marginRight: '40px', marginTop: '30px', marginBottom: '13px' }}>
                            <text style={{ marginLeft: '66px' }}>Trouble Logging in?</text>
                            <input placeholder="                   Enter your email id" style={{ width: '250px', height: '23px', marginTop: '20px', marginLeft: '5px', borderBottom: 'brown', borderTop: 'brown', borderLeft: 'brown', borderRight: 'brown', backgroundColor: 'white' }} onChange={this.handleChangeEmailId}></input>
                            <button style={{ width: '258px', marginTop: '10px', height: '30px', marginLeft: '3px', backgroundColor: 'blue', marginBottom: '20px', borderColor: 'brown' }} onClick={(event) => this.handleSendLinkView(event)}>Send Login Link</button>
                            <text style={{ marginLeft: '122px' }}>OR</text><br></br>
                            <div style={{ marginTop: '15px' }}>
                                <label style={{ marginLeft: '7px', fontSize: '14px' }}>Create New Account Click<Link to="/SignUpForm" style={{ marginLeft: '7px', color: 'blue' }}>Here</Link></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword