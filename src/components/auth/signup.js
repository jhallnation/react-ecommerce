import React, { Component } from 'react';

import SignUpForm from './signupform';
import PageTitle from '../pagetitle';

export default class SignUp extends Component {

  onSubmit = (fields) => {
    console.log(fields);
  }

  render() {
    return (
      <div className='sign-up'>
        <PageTitle className='sign-up__page-title' title='Register' />
        <SignUpForm className='sign-up__form' onSubmit={this.onSubmit} />
      </div>
    )
  }
}