const express = require('express')
const Device = require('../models/device')
const deviceConnectionCheck = require('../middleware/device-connection-check')

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
  .post(deviceConnectionCheck, async (req, res, next) => {
    try {
      const {
        name,
        deviceModelName,
        manufacturer,
        location,
        edgeSerialNumber,
        networkInterface,
        networkConfig,
        description,
        userId,
        departmentId
      } = req.body
      console.log(req.body)
      const device = await Device.create({
        name,
        deviceModelName,
        manufacturer,
        location,
        edgeSerialNumber,
        networkInterface,
        networkConfig,
        description,
        userId,
        departmentId
      })
      res.status(201).json(device)
    } catch (err) {
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

