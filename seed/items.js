const db = require('../db')
const Item = require('../models/item')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const faker = require('faker')

const main = async () => {
  // const items = [...Array(100)].map(item => (


  const items = [
    { title: "shoe", description: "ricoderosa@yaho.com" },
    { title: "bike", description: "rgsdhsdha@yaho.com" },

  ]

  await Item.insertMany(items)
  console.log("Created items!")
}
const run = async () => {
  await main()
  db.close()
}

run()