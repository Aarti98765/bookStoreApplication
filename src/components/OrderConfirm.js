import React, { Component } from 'react';
import image from '../images/success1.png';

class OrderConfirm extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }
   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    return (
       <div>
       <div>
        <img src={image} alt="" style={{ width:'300px', height:'200px',marginTop:'10px', marginLeft:'290px' }}></img>
       </div>
       <div>
          <div style={{ textAlign:'center' }} >
          <h3 >Order Placed Successfully </h3>
          <p>hurray!!!your order is confirmed <br></br>
             the order id is #123456 save the order id for<br></br>
             futher communication.</p>
          </div>   
          <table id='students'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
          <br></br>
          <button className="button12">Continue Shopping</button>
         <br></br>  <br></br>  <br></br>
       </div>
       </div>
    )
 }
}

export default OrderConfirm;