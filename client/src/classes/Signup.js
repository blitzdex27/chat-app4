const postData = async (data, url) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();

  return json;
};

class SignUp {
  constructor() {
    // this.newUserState = {};
    // this.setNewUserState = {};
    this.signUpData = {};
    this.givenName = '';
    this.familyName = '';
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.errorMessage = '';
    this.regSucceedMessage = '';
  }

  submit() {
    console.log('am i triggered?');
    console.log(this.givenName);
    if ((this.password = this.confirmPassword)) {
      const data = {
        givenName: this.givenName,
        familyName: this.familyName,
        username: this.username,
        password: this.password,
      };

      this.signUpData = data;

      console.log(data);
      postData(data, '/signup').then((res) => {
        console.log(res);
        if (res.hasOwnProperty('error')) {
          this.errorMessage = res.error;
          this.regSucceedMessage = '';
        } else {
          this.regSucceedMessage = res.reqStatus;
          this.errorMessage = '';
        }
      });
    }
  }
}

export default SignUp;
