const jwt = require('jsonwebtoken');

// Token secret with expiration time
const secret = '4321pass1234word';
const expiration = '2h';

module.exports = {
  // Function for authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      //return res.status(400).json({ message: 'You have no token!' });
      return req;
    }

    // Verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      //return res.status(400).json({ message: 'Invalid token!' });
    }

    // Send to next endpoint
    //next();
    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};