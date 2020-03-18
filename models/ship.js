const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ship = new Schema(
  {
    _id: "users_session_id",
    status: 'active',
    quantity: 0,
    items: []
  },
  { timestamps: true }
)

module.exports = mongoose.model('ships', Ship);