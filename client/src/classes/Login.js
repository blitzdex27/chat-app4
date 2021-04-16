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

class LogIn {
  constructor() {
    this.username = '';
    this.password = '';
  }
  login() {
    const data = {
      username: this.username,
      password: this.password,
    };

    postData(data, '/signin');
  }
}
export default LogIn;
