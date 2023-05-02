const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

// Add a request interceptor to add the token to all outgoing requests
instance.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('login_token');

    // If a token exists, add it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Return the modified config object
    return config;
  },
  (error) => {
    // If an error occurs, return a rejected promise
    return Promise.reject(error);
  }
);

// Make a GET request to the /users endpoint
instance.get('/students/search_students')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
