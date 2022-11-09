const checkLoginSession = async () => {
  const response = await fetch('http://localhost:8080/checkSession');
  const json = await response.json();
  return json;
};
export default checkLoginSession;
