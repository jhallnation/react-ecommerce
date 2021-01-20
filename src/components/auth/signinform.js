import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formfields';

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field 
          className='sign-in-form__email' 
          type='email'
          name='email'
          title='Email'
          placeholder='Email'
          component={FormInput} 
        />
        <Field 
          className='sign-in-form__password' 
          type='password'
          name='password'
          title='Password'
          placeholder='Password'
          component={FormInput} 
        />
        <Field 
          className='sign-in-form__login' 
          onClick={() => console.log('login submit')}
          type='submit'
          name='login'
          title='Login'
          component={FormButton} 
        />
      </form>
    )
  }
}

export default (reduxForm({
  form: 'SignInForm'
})(SignInForm));