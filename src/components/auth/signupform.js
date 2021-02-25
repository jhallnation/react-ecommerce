import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formfields';
import Details from '../details';

import history from '../../history';

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: 'Already Registered?',
        onClick: () => history.push('/signin')
      }
    ];
    const requirements = [
      {
        _id: 0,
        title: 'At least 6 characters'
      },
      {
        _id: 1,
        title: 'At least one number'
      },
      {
        _id: 2,
        title: 'At least one symbol'
      }
    ];
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
        <Field 
          className='sign-up-form__name' 
          type='name'
          name='name'
          title='Name'
          placeholder='Name'
          component={FormInput} 
        />
        <Field 
          className='sign-up-form__email' 
          type='email'
          name='email'
          title='Email'
          placeholder='Email'
          component={FormInput} 
        />
        <Field 
          className='sign-up-form__password' 
          type='password'
          name='password'
          title='Password'
          placeholder='Password'
          component={FormInput} 
        />
        <Field 
          className='sign-up-form__confirm' 
          type='password'
          name='confirm'
          title='Confirm Password'
          placeholder='Confirm Password'
          component={FormInput} 
        />

        <div className='sign-up-form__line'></div>

        <Field 
          className='sign-up-form__back' 
          onClick={() => history.goBack()}
          type='submit'
          name='back'
          title='Back'
          grey={true}
          component={FormButton} 
        />
        <Field 
          className='sign-up-form__register' 
          onClick={() => console.log('login submit')}
          type='submit'
          name='register'
          title='Register'
          component={FormButton} 
        />

        <div className='sign-up-form__details'>
          <Details 
            className='sign-up-form__details__requirements' 
            title='Password Requirements' 
            requirements={requirements}
          />

          <Details 
            className='sign-up-form__details__links' 
            title='QuickLinks' 
            links={links}
        />
        </div>
      </form>
    )
  }
}

export default (reduxForm({
  form: 'SignUpForm'
})(SignUpForm));