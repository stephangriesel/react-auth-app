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
      const { currentUserEmail, currentUserName } = this.state;
    return (
      <div>
        <h1>Welcome { currentUserName } </h1>
        <p>Email: { currentUserEmail } </p>
        <p>Your have successfully logged in.</p>
      </div>
    )
  }
}

export default Members;
