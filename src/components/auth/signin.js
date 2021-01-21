import React, { Component } from 'react';

import SignInForm from './signinform';
import PageTitle from '../pagetitle';

export default class SignIn extends Component {

  onSubmit = (fields) => {
    console.log(fields);
  }

  render() {
    return (
      <div className='sign-in'>
        <PageTitle className='sign-in__page-title' title='Sign In' />
        <SignInForm className='sign-in__form' onSubmit={this.onSubmit} />
      </div>
    )
  }
}