import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux';

const Login = props => {
  const { handleSubmit } = props;

  return (
    <div>
      <h1>Login</h1>
      <div>
        <LocalLoginForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login({ email, password })).then(() => {
        ownProps.history.push('/home');
      });
    },
  };
};

export default connecct(null, mapDispatchToProps)(Login);
