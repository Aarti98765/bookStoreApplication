import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }
  
  componentDidMount() {
    axios.get(`http://localhost:8080/homepage/all`)
      .then(res => {
        const persons = res.data;
         this.setState({ persons });
       console.log("data", res)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ul>
        { 
          this.state.persons.map(person => <li key={person.id}>{person.author}</li>)
        }
      </ul>
    )
  }
}