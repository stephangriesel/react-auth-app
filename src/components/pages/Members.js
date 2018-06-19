import React, { Component } from 'react'

class Members extends Component {
    state = {
        currentUserName: '',
        currentUserEmail: ''
    }

    componentDidMount() {
        const  idToken= JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        });
    }


  render() {
      console.log(this.state);
    return (
      <div>
        
      </div>
    )
  }
}

export default Members;
