import { useState, useRef } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

import classes from './AuthForm.module.css';

const AuthForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const mobileInputRef = useRef(); 

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


    // optional: Add validation

    if (isLogin) {
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => {
        if (res.ok) {
          // ...
        } else {
          return res.json().then((data) => {
            // show an error modal
            console.log(data);
          });
        }
      });
    }
  };

  return (
    <Modal onClose={props.onClose}>
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        {!isLogin && <div className={classes.control}>
          <label htmlFor='name'>Full Name</label>
          <input type='name' id='name' required ref={nameInputRef} />
        </div>}
        <div className={classes.control}>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        {!isLogin && <div className={classes.control}>
          <label htmlFor='mobile'>Mobile Number</label>
          <input type='tel' id='mobile' required ref={mobileInputRef} />
        </div>}
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    </Modal>
  );
};

export default AuthForm;