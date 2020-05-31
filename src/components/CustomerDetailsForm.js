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
        
          <span></span>
              <input 
                type="text" 
                placeholder="   Name" 
                className="style-name-text" 
                />
                <input className="style-number-text"
                type="text" 
                placeholder="    Phone Number"  
                />
            <div>
                <span> </span>
    	        <input className="style-pincode-text"
                type="text" 
                placeholder="    Pincode" 
                />
                <input className="style-number-text"
                type="text" 
                placeholder="    Locality" 
                />
            </div>
            <div>
                <textarea className="style-address-text"
                type="text" 
                placeholder="  Address" 
            />
        </div>
        
        <div>
          <span> </span>
    	  <input className="style-pincode-text"
          type="text" 
          placeholder="    City/Town" 
        />
        <input className="style-number-text"
          type="text" 
          placeholder="    Landmark" 
        />
        </div>

        <div className="radio">
         <span></span>
        <label style={{ marginRight:'50px', marginLeft:'69px' }}>
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
          <div style={{marginLeft:'120px', marginBottom:'20px' }}>
            Selected option is : {this.state.selectedOption}   
          <button style={{marginTop:'18px', marginLeft:'220px', width:'120px', height:'27px', border:'white', color:'white', backgroundColor:'rgb(26, 74, 165)'}} className="btn btn-default" type="submit">
            Continue
          </button>
          </div>
      </div>
      </div> 
     </form>
     );
  }
}

export default CustomerDetailsForm;