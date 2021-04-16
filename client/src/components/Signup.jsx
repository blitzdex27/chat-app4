import React from 'react';

function Signup({ newUser, handler }) {
  const signupHandler = {
    givenName: (event) => {
      console.log(event.target.value);
      newUser.signupData.givenName = event.target.value;
    },
    familyName: (event) => {
      newUser.signupData.familyName = event.target.value;
    },
    username: (event) => {
      newUser.signupData.username = event.target.value;
    },
    password: (event) => {
      newUser.signupData.password = event.target.value;
    },
    confirmPassword: (event) => {
      newUser.signupData.confirmPassword = event.target.value;
    },
    submit: () => {
      newUser.signup();
    },
    signupError: newUser.signupData.errorMessage,
    signupSuccess: newUser.signupData.regSucceedMessage,
  };

  const {
    givenName,
    familyName,
    username,
    password,
    confirmPassword,
    submit,
    signupSuccess,
    signupError,
  } = signupHandler;
  let signupMessage = '';
  let classes = '';
  if (signupSuccess !== '') {
    signupMessage = signupSuccess;
    classes = 'text-center text-success';
  } else if (signupError !== '') {
    signupMessage = signupError;
    classes = 'text-center text-danger';
  }
  return (
    <section id="signup">
      <div className="page-single-form-container bg-dark rounded">
        <div className="brand mb-3 text-center">
          <a className="navbar-brand fs-1" href="/">
            Chat App
          </a>
        </div>
        <h1 className="text-light text-center mb-5 fs-2">Please sign up</h1>
        <form action="/signup" method="POST">
          {<p className={classes}>{signupMessage}</p>}
          <div className="mb-3">
            {/* <!-- ENTER GIVEN NAME AND FAMILY NAME  -->
              <!-- Given and family name START  --> */}
            <div className="row g-2">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="signUpGivenName"
                    placeholder="John"
                    name="givenName"
                    // value={userInfo.givenName}
                    onChange={givenName}
                  />
                  <label for="signUpGivenName">Given name</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="signUpLastName"
                    placeholder="Doe"
                    name="familyName"
                    // value={userInfo.familyName}
                    onChange={familyName}
                  />
                  <label for="signUpLastName">Family name</label>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Given and family name END  --> */}

          {/* <!-- DISPLAY EMAIL  --> */}
          <div className="mb-3">
            {/* <!-- ENTER GIVEN NAME AND FAMILY NAME  -->
              <!-- Given and family name START  --> */}
            <div className="row g-2">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="signupEmail"
                    placeholder="john@doe.com"
                    name="username"
                    // value={userInfo.username}
                    onChange={username}
                  />
                  <label for="signupEmail">Email</label>
                  {/* <!-- Email END  --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Given and family name END  --> */}

          <div className="mb-3">
            {/* <!-- Password START  --> */}
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="signupPassword"
                placeholder="Password"
                name="password"
                // value={userInfo.password}
                onChange={password}
              />
              <label for="signupPassword">Password</label>

              {/* <!-- Password END  --> */}
            </div>
          </div>

          {/* <!-- Confirm Password START  --> */}
          <div className="mb-3">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="signupConfirmPassword"
                placeholder="Confirm Password"
                name="confirmPassword"
                // value={userInfo.confirmPassword}
                onChange={confirmPassword}
              />
              <label for="signupConfirmPassword">Confirm Password</label>
              {/* <!-- Confirm Password END  --> */}
              <p
                id="signup-password-warning"
                // className={isPasswordMatched ? 'invisible' : 'text-danger'}
              >
                * Password did not matched!
              </p>
            </div>
          </div>

          <button
            onClick={submit}
            id="signup-button"
            type="button"
            className="btn btn-lg btn-primary w-100 my-3"
          >
            Sign up
          </button>
        </form>
        {/* <!-- GOOGLE SIGN IN  --> */}
        <a
          href="/auth/google"
          className="text-center w-100 btn btn-lg btn-block btn-social btn-google"
        >
          <i className="fab fa-google"></i>
          Sign up with Google
        </a>
      </div>
    </section>
  );
}

export default Signup;
