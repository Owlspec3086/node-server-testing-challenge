const express = require('express');
const Users = require('./users-modules');

const router = express.Router();

// get / endpoint
router.get('/', async (req, res, next) => {
  try {
    res.json(await Users.find());
  } catch (err) {
    next(err);
  }
});

// new get user by id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: 'Wrong user search harder',
      });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
});

//post endpoint for creating new user
router.post('/', async (req, res, next) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

//delete User
router.delete('/:id', async (req, res, next) => {
  try {
    const Users = await Users.del();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
