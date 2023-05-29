const Marketprice = require('../models/Marketprice')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllMarketprices = async (req, res) => {
  const marketprices = await Marketprice.find({ createdBy: req.user.userId }).sort('createdAt')
  res.status(StatusCodes.OK).json({ marketprices, count: marketprices.length })
}
const getMarketprice = async (req, res) => {
  const {
    user: { userId },
    params: { id: marketpriceId },
  } = req

  const marketprice = await Marketprice.findOne({
    _id: marketpriceId,
    createdBy: userId,
  })
  if (!marketprice) {
    throw new NotFoundError(`No job with id ${marketpriceId}`)
  }
  res.status(StatusCodes.OK).json({ marketprice})
}

const createMarketprice = async (req, res) => {
  console.log(req.body)
  req.body.createdBy = req.user.userId
  const marketprice = await Marketprice.create(req.body)
  res.status(StatusCodes.CREATED).json({ marketprice })
}

const updateMarketprice = async (req, res) => {
  const {
    body: { name, Phone },
    user: { userId },
    params: { id: marketpriceId },
  } = req

  if (name === '' || Phone === '') {
    throw new BadRequestError('Name or Phone fields cannot be empty')
  }
  const marketprice = await Marketprice.findByIdAndUpdate(
    { _id: marketpriceId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  )
  if (!marketprice) {
    throw new NotFoundError(`No marketprice with id ${marketpriceId}`)
  }
  res.status(StatusCodes.OK).json({ marketprice })
}

const deleteMarketprice = async (req, res) => {
  const {
    user: { userId },
    params: { id: marketpriceId },
  } = req

  const marketprice = await Marketprice.findByIdAndRemove({
    _id: marketpriceId,
    createdBy: userId,
  })
  if (!marketprice) {
    throw new NotFoundError(`No marketprice with id ${marketpriceId}`)
  }
  res.status(StatusCodes.OK).send()
}

module.exports = {
    createMarketprice,
    deleteMarketprice,
    getAllMarketprices,
    updateMarketprice,
    getMarketprice,
}
