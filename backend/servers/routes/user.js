const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  user.password = await bcrypt.hash(user.password, 8);
  await user.save();
  res.status(201).send(user);
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({ error: 'Invalid login credentials' });
  }

  const token = jwt.sign({ id: user.id }, 'secretkey');
  res.send({ user, token });
});

module.exports = router;
