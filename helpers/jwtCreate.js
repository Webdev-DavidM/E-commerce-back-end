import jwt from 'jsonwebtoken';

const jwtCreate = (createdUser) => {
  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.jwtSecret,
      { expiresIn: '1h' }
    );
    return token;
  } catch (err) {
    console.log('error');
  }
};

export default jwtCreate;
