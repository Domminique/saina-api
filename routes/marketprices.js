const express = require('express')

const router = express.Router()
const {
  createMarketprice,
  deleteMarketprice,
  getAllMarketprices,
  updateMarketprice,
  getMarketprice,
} = require('../controllers/marketprices')

router.route('/').post(createMarketprice).get(getAllMarketprices)

router.route('/:id').get(getMarketprice).delete(deleteMarketprice).patch(updateMarketprice)

module.exports = router
