const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true
  },
  ingredient: {
    type: String
  },
  // {
  // type: [String],
  // required: true,
  // // this means you can have an empty array and it won't trigger an error
  // // can add a beer without any ingredients and then update later
  // default: ['']
  // },
  // update this to reflect what's in the ingredients
  brewStep: {
    type: String
  },
  note: {
    type: String
    // type: [String],
    // default: undefined
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)
