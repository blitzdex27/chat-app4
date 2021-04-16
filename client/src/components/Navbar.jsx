import React from 'react';
import Navbrand from './microComp/Navbrand';
import Button from './microComp/Button';

function Navbar(props) {
  const { loginHandler, signupHandler, navbrandHandler } = props;

  return (
    <div className="Navbar">
      <Navbrand handler={navbrandHandler} />
      <Button handler={loginHandler} className="login" name="Login" />
      <Button handler={signupHandler} className="signup" name="Signup" />
    </div>
  );
}

export default Navbar;
