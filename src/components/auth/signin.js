import React, { Component } from 'react';

import SignInForm from './signinform';

export default class SignIn extends Component {

  onSubmit = (fields) => {
    console.log(fields);
  }

  render() {
    return (
      <div className='sign-in'>
        <SignInForm className='sign-in__form' onSubmit={this.onSubmit} />
      </div>
    )
  }
}