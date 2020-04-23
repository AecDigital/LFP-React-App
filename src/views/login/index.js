import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { userLogin } from '../../redux/actions/getLFPUsers';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '125px',
    width: '800px'
  },
}));


export default function Login({ history }) {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      history.push({ pathname: `/users` });
      dispatch(userLogin(username, password));
    }
  }

  return (
    <Container className={classes.container}>
      <div className="col-lg-8 offset-lg-2">
        <h2>Login</h2>
        <form name="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
            {submitted && !username &&
              <div className="invalid-feedback">Username is required</div>
            }
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
            {submitted && !password &&
              <div className="invalid-feedback">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Login
                    </button>
            <Link to="/register" className="btn btn-link">Register</Link>
          </div>
        </form>
      </div>
    </Container>
  );
}
