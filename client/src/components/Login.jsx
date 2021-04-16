import React from 'react';

function Login({ newUser, setUserState }) {
  // handles login parameters through newUser class
  const loginHandler = {
    username: (event) => {
      newUser.loginData.username = event.target.value;
    },
    password: (event) => {
      newUser.loginData.password = event.target.value;
    },
    login: () => {
      newUser.login(setUserState);
      console.log(newUser.loginData);
    },
  };
  const { username, password, login } = loginHandler;

  return (
    <section id="signin">
      <div className="page-single-form-container bg-dark rounded">
        <div className="brand mb-3 text-center">
          <a className="navbar-brand fs-1" href="/">
            Chat App
          </a>
        </div>
        <h1 className="text-light text-center mb-5 fs-2">Please sign in</h1>
        <form action="/signin" method="POST">
          <div className="mb-3">
            <div className="form-floating">
              <input
                onChange={username}
                type="email"
                className="form-control"
                id="signinEmail"
                placeholder="john@doe.com"
                name="username"
                // value={credentials.username}
              />
              <label for="signinEmail">Email</label>
              {/* <!-- Email END  --> */}
            </div>
          </div>

          {/* <!-- Given and family name END  --> */}

          <div className="mb-3">
            {/* <!-- Password START  --> */}
            <div className="form-floating">
              <input
                onChange={password}
                type="password"
                className="form-control"
                id="signinPassword"
                placeholder="Password"
                name="password"
                // value={credentials.password}
              />
              <label for="signinPassword">Password</label>
              {/* <!-- Password END  --> */}
            </div>
          </div>

          <button
            onClick={login}
            type="submit"
            className="btn btn-lg btn-primary w-100 my-3"
          >
            Sign in
          </button>
        </form>
        {/* <!-- GOOGLE SIGN IN  --> */}
        {/* <a
          role="button"
          onClick={googleSignInHandler}
          className="text-center w-100 btn btn-lg btn-block btn-social btn-google"
        >
          <i className="fab fa-google"></i>
          Sign in with Google
        </a> */}
      </div>
    </section>
  );
}

export default Login;
