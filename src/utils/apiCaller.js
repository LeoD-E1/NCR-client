const apiCaller = async (endpoint) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}${endpoint}`);
  const data = await response.json();
  return data;
};

export default apiCaller;
