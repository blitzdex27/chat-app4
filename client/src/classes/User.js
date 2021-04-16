import postData from '../scripts/postData';

class User {
  constructor() {
    this.isAuthenticated = false;
    this.data = {
      id: '',
      username: '',
      givenName: '',
      familyName: '',
      email: '',
      contacts: [],
    };
    this.loginData = {
      username: '',
      password: '',
    };
    this.signupData = {
      givenName: '',
      familyName: '',
      username: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      regSucceedMessage: '',
    };
  }

  login(setUserState) {
    const loginData = {
      username: this.loginData.username,
      password: this.loginData.password,
    };

    postData(loginData, '/signin').then((res) => {
      this.isAuthenticated = res.isAuthenticated;
      this.data = res.data;
      console.log('response' + res);

      //   this.data.id = res.data.id;
      //   this.data.username = res.data.username;
      //   this.data.givenName = res.data.givenName;
      //   this.data.familyName = res.data.familyName;
      //   this.data.email = res.data.email;
      //   this.data.contacts = res.data.contacts;
    });
    const socket = new WebSocket('ws://localhost:8080');
    socket.addEventListener('open', function (event) {
      socket.send('Hello Server!');
    });

    socket.addEventListener('message', function (event) {
      // console.log('Message from server ', event.data);
      // console.log(event);
      console.log(event.data)
      const data = JSON.parse(event.data);
      console.log(data);
      console.log(data.user);
    });

    socket.addEventListener('close', function (event) {
      console.log('The connection has been closed');
    });

    // if (data === null) {
    //   console.log('closing connection');
    //   socket.close();
    // }
  }

  signup() {
    if (this.signupData.password === this.signupData.confirmPassword) {
      const signupData = {
        givenName: this.signupData.givenName,
        familyName: this.signupData.familyName,
        username: this.signupData.username,
        password: this.signupData.password,
      };
      console.log(signupData);
      postData(signupData, '/signup').then((res) => {
        console.log(res);
        if (res.hasOwnProperty('error')) {
          this.signupData.errorMessage = res.error;
          this.signupData.regSucceedMessage = '';
          //   return false;
        } else {
          this.signupData.regSucceedMessage = 'Registered';
          this.signupData.errorMessage = '';
          this.data = res.data;
          this.isAuthenticated = true;
          //   return true;
        }
      });
    } else {
      this.signupData.errorMessage = 'Password do not match.';
    }
  }
}

export default User;
