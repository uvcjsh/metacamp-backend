const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.route('/')
  .get(async (req, res, next) => {
    try {
      const user = await User.findAll()
      const result = user.map(item => {
        const { id, userId, role } = item
        return { id, userId, role }
      })
      res.json(result)
    } catch(err) {
      console.error(err)
      next(err)
    }
  })
  .post(async (req, res, next) => {
    try {
      const {name, userId, password, role, email, phone, departmentId} = req.body
      const user = await User.create({
        name,
        userId,
        password,
        role,
        email,
        phone,
        departmentId
      })
      console.log(user)
      res.status(201).json(user)
    } catch(err) {
      console.error(err)
      next(err)
    }
  })

  router.route('/:id')
    .get(async (req, res, next) => {
      try {
        const result = await User.findByPk(req.params.id)
        res.json(result)
      } catch(err) {
        console.error(err)
        next(err)
      }
    })
    .patch(async (req, res, next) => {
      try {
        const {name, code, description} = req.body
        const result = await User.update({
          name,
          userId,
          password,
          role,
          email,
          phone
        }, {
          where: { id: req.params.id }
        })
        res.json(result)
      } catch(err) {
        console.error(err)
        next(err)
      }
    })
    .delete(async (req, res, next) => {
      try {
        const result = await User.destroy({where: {id: req.params.id}})
        res.json(result)
      } catch(err) {
        console.error(err)
        next(err)
      }
    })
  module.exports = router

