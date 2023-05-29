const mongoose = require('mongoose')
 
const MarketpriceSchema = new mongoose.Schema(

  {
    
    marketprices:[],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

 

module.exports = mongoose.model('Marketprice', MarketpriceSchema)
