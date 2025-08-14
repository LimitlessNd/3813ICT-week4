const express = require('express');
const router = express.Router();

class User {
  constructor(username, birthdate, age, email, password) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
  }
}

// Hardcoded users
const users = [
  new User('John', '1995-05-20', 29, '1@test.com', '123'),
  new User('Mary', '1990-08-15', 34, '2@test.com', '456'),
  new User('Peter', '2000-01-10', 25, '3@test.com', '789')
];

router.post('/', (req, res) => {
  const { email, password } = req.body;

  const foundUser = users.find(
    user => user.email === email && user.password === password
  );

  if (foundUser) {
    // Return user without password
    const { password, ...userWithoutPassword } = foundUser;
    res.json({ ...userWithoutPassword, valid: true });
  } else {
    res.json({ valid: false });
  }
});

module.exports = router;
