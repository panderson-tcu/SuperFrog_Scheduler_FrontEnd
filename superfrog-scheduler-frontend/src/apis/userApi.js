
const info = async () => {
  return await fetch('/api/profile').then((r) => r.json());
};

const login = async (loginInfo) => {
  const loginUrl = 'http://localhost:8080/api/v1/users/login';
  
  const authHeader = {
    username: loginInfo.account,
    password: loginInfo.password
  };
  


  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${authHeader.username}:${authHeader.password}`)}`
      },
    });

    const responseData = await response.json();
    //console.log(responseData.data.token);
    //console.log(loginInfo)
    return responseData;
    // handle the response data
  } catch (error) {
    console.error('Error:', error);
  }
};




// const login = async (loginInfo) => {
//   return await fetch('/api/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(loginInfo),
//   }).then((r) => r.json());
// };

export default { info, login };
