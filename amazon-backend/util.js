import jwt from 'jsonwebtoken';
const getToken = (user) => {
  return jwt.sign(user, config.JWT_SECRET, {
    expireIn: '48h'
  })
}

export {
  getToken
}