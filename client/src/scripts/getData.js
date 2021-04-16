const getData = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  const json = await response.json();
  // messages = json;
  console.log(json);
  return json;
};

export default getData;
