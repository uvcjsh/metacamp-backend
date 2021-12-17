const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.route('/')
  .get(async (req, res, next) => {
    try {
      const users = await User.findAll()
      res.json(users)
    } catch(err) {
      console.error(err)
      next(err)
    }
  })
  .post(async (req, res, next) => {
    try {
      const {name, userid, password, role, email, phone} = req.body
      const user = await User.create({
        name,
        userid,
        password,
        role,
        email,
        phone
      })
      console.log(user)
      res.status(201).json(user)
    } catch(err) {
      console.error(err)
      next(err)
    }
  })

  module.exports = router

