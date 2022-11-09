const login = async ({ username, password }) => {
  const data = new FormData();
  data.append('username', username);
  data.append('password', password);
  const resp = await fetch('http://localhost:8080/login', {
    method: 'POST',
    body: data,
  });
  const json = await resp.json();
  return json;
};

export default login;
