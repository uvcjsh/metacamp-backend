const express = require('express')
const Device = require('../models/device')

const router = express.Router()

router.route('/')
  .get(async (req, res, next) => {
    try {
      const Devices = await Device.findAll()
      res.json(Devices)
    } catch(err) {
      console.error(err)
      next(err)
    }
  })
  .post(async (req, res, next) => {
    try {
      const {
        name,
        device_model_name,
        manufacturer,
        location,
        edge_serial_number,
        network_interface,
        network_config,
        description,
        user_id,
        department_id
      } = req.body
      const Device = await Device.create({
        name,
        device_model_name,
        manufacturer,
        location,
        edge_serial_number,
        network_interface,
        network_config,
        description,
        user_id,
        department_id
      })
      console.log(Device)
      res.status(201).json(Device)
    } catch(err) {
      console.error(err)
      next(err)
    }
  })

  router.route('/:id')
    .get(async (req, res, next) => {
      try {
        const result = await Device.findByPk(req.params.id)
        res.json(result)
      } catch(err) {
        console.error(err)
        next(err)
      }
    })
    .patch(async (req, res, next) => {
      try {
        const {
          name,
          device_model_name,
          manufacturer,
          location,
          edge_serial_number,
          network_interface,
          network_config,
          description,
          user_id,
          department_id
          } = req.body
        const result = await Device.update({
          name,
          device_model_name,
          manufacturer,
          location,
          edge_serial_number,
          network_interface,
          network_config,
          description,
          user_id,
          department_id
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
        const result = await Device.destroy({where: {id: req.params.id}})
        res.json(result)
      } catch(err) {
        console.error(err)
        next(err)
      }
    })
  module.exports = router

