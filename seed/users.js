const db = require('../db')
const User = require('../models/user')
const Item = require('../models/item')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//const faker = require('faker')

const main = async () => {
  const HyperspaceEngine=await Item.find({ title: 'Hyperspace Engine'})
  const EscapePods=await Item.find({ title: 'Escape Pods'})
  

  const users = [
    { username: "rico", email: "ricoderosa@yaho.com", password_digest: "password", items: [HyperspaceEngine[0]._id, EscapePods[0]._id] },
    { username: "elmo", email: "rgsdhsdha@yaho.com", password_digest: "pass", items: [] },

  ]
  console.log(users)
  await User.insertMany(users)
  console.log("Created users!")
}
const run = async () => {
  await main()
  db.close()
}

run()