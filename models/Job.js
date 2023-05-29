const mongoose = require('mongoose')
 
const JobSchema = new mongoose.Schema(

  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide phonenumber'],
      default: '+254 781 270 015',
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    image: {
      type: String,
      default: '/uploads/example.jpeg',
    },
    email: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: '/uploads/example.jpeg',
    },
    website: {
      type: String,
      default: 'https://savannaspace.com',
    },
    category: {
      type: String,
      required: [false, 'Please provide product category'],
      enum: ['office', 'kitchen', 'bedroom'],
    },
    country: {
      type: String,
      required: [true, 'Please provide country'],
      enum: {
        values: ['kenya', 'uganda', 'south africa','tanzania', 'nigeria', 'egypt'],
        message: '{VALUE} is not supported',
      },
    },
    county: {
      type: String,
      required: [false, 'Please provide country'],
      enum: {
        values: ['Mombasa', 'Kwale', 'Kilifi','Tana River', 'Lamu', 'Taita–Taveta','Garissa','Wajir','Mandera','Marsabit','Isiolo','Meru','Tharaka-Nithi','Embu','Kitui','Machakos','Makueni','Nyandarua','Nyeri','Kirinyaga',"Murang'a",'Kiambu','Turkana','West Pokot','Samburu', 'Trans-Nzoia','	Uasin Gishu','	Elgeyo-Marakwet','Nandi','Baringo','Laikipia','Nakuru','Narok','Kajiado','Kericho','Bomet','Kakamega','Vihiga','Bungoma','Busia','Siaya','Kisumu','Homa Bay','Migori','	Kisii','Nyamira','Nairobi'],
        message: '{VALUE} is not supported',
      },
    },
    company: {
      type: String,
      required: [true, 'Please provide company'],
      enum: {
        values: ["supplier", "distributer","importer", "exporter", "wholeseller", "retailer", "farm-gate"],
        message: '{VALUE} is not supported',
      },
    },
    services: {
      type: [String],
      default: ['agro processing'],
      required: false,
    },
    commodities: {
      type: [String],
      default: ['maize'],
      required: false,
    },
    domain: {
      type: [String],
      default: ['agriculture'],
      required: false,
    },
    products: {
      type: [String],
      default: ['maize'],
      required: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      type: Number,
      required: false,
      default: 15,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

 

module.exports = mongoose.model('Job', JobSchema)
