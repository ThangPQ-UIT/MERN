import axios from 'axios'

// export const register = newUser => {
//   return axios
//     .post('/register', {
//       first_name: newUser.first_name,
//       last_name: newUser.last_name,
//       email: newUser.email,
//       password: newUser.password
//     })
//     .then(response => {
//       console.log(response, ' Registered')
//     })
// }

export const register = function(newUser) {
  return axios
    .post('/user/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log("res.success(function) ", response.data);
      return response;
    })
}

export const login = function(user) {
  return axios
    .post('/user/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      console.log("res.data: ", response.data);
      return response
    })
    .catch(err => {
      console.log(err)
    })
}