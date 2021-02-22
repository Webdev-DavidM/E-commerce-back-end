import jwt from 'jsonwebtoken';

const jwtCreate = (createdUser) => {
  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      'crystal palace are the best',
      { expiresIn: '1h' }
    );
    return token;
  } catch (err) {
    console.log('error');
  }
};

export default jwtCreate;
