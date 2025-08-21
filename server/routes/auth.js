const express = require('express');
const router = express.Router();


class User {
  constructor(username, birthdate, age, email, password, valid = true) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = valid; 
  }
}

// Hardcoded users
const users = [
  new User('John', '1995-05-20', 29, '1@test.com', '123', true),
  new User('Mary', '1990-08-15', 34, '2@test.com', '456', true),
  new User('Peter', '2000-01-10', 25, '3@test.com', '789', true)
];

// Login route
router.post('/', (req, res) => {
  const { email, password } = req.body;

  const foundUser = users.find(
    user => user.email === email && user.password === password
  );

  if (foundUser) {
    // Exclude password before sending response
    const { password, ...userWithoutPassword } = foundUser;
    res.json({ ...userWithoutPassword, valid: true });
  } else {
    res.json({ valid: false });
  }
});

module.exports = router;