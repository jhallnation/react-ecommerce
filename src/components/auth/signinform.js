import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formfields';
import Details from '../details';

import history from '../../history';

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: 'Not Registered? Create account',
        onClick: () => history.push('/signup')
      },
      {
        _id: 1,
        title: 'Forgot account email?',
        onClick: () => console.log('FORGOT EMAIL')
      },
      {
        _id: 2,
        title: 'Forgot password?',
        onClick: () => console.log('FORGOT PASSWORD')
      }
    ];
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
        <div className='sign-in-form__line'></div>
        <Field 
          className='sign-in-form__login' 
          onClick={() => console.log('login submit')}
          type='submit'
          name='login'
          title='Login'
          component={FormButton} 
        />

        <Details 
          className='sign-in-form__details' 
          title='QuickLinks' 
          links={links}
        />
      </form>
    )
  }
}

export default (reduxForm({
  form: 'SignInForm'
})(SignInForm));