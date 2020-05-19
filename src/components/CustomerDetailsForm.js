import React, { Component } from "react";

class CustomerDetailsForm extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formContinue = this.formContinue.bind(this);
}

onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
}

formContinue(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
}

render() {
    return (
        <form onSubmit={this.formContinue}>
        <div>
          <span className="formtext">&#x3C;Form/&#x3E;</span>
              <input 
                type="text" 
                placeholder="Name" 
                required 
                />
                <input className="style-number-text"
                type="text" 
                placeholder="Phone Number" 
                required 
                />
            <div>
                <span> </span>
    	        <input className="style-pincode-text"
                type="text" 
                placeholder="Pincode" 
                />
                <input className="style-number-text"
                type="text" 
                placeholder="Locality" 
                />
            </div>
            <div>
                <textarea className="style-address-text"
                type="text" 
                placeholder="Address" 
            />
        </div>
        
        <div>
          <span> </span>
    	  <input className="style-pincode-text"
          type="text" 
          placeholder="City/Town" 
        />
        <input className="style-number-text"
          type="text" 
          placeholder="Landmark" 
        />
        </div>

        <div className="radio">
         <span></span>
        <label style={{ marginRight:'50px'}}>
          <input 
            type="radio"
            value="Home"
            checked={this.state.selectedOption === "Home"}
            onChange={this.onValueChange}
          />
          Home
        </label>
      
        <label style={{ marginRight:'50px'}}>
          <input
            type="radio"
            value="Work"
            checked={this.state.selectedOption === "Work"}
            onChange={this.onValueChange}
          />
          Work
        </label>
      
        <label>
          <input
            type="radio"
            value="Other"
            checked={this.state.selectedOption === "Other"}
            onChange={this.onValueChange}
          />
          Other
        </label>
      
      <div>
          <span></span>
          <div style={{marginLeft:'120px'}}>
            Selected option is : {this.state.selectedOption}   
          <button style={{marginTop:'18px', marginLeft:'33px', width:'100px'}}className="btn btn-default" type="submit">
            Continue
          </button>
          </div>
      </div>
     
      </div> 
     </div>
     </form>
     );
  }
}

export default CustomerDetailsForm;