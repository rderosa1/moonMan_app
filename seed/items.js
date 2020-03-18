const db = require('../db')
const Item = require('../models/item')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const faker = require('faker')

const main = async () => {
  // const items = [...Array(100)].map(item => (


  const items = [
    { title: "Hyperspace Engine", description: "An engine for travelling through hyperspace" },
    { title: "Sensor Dish", description: "A module for detecting space junk, asteroids, and malicious attacks" },
    { title: "Escape Pods", description: "For when all hell breaks loose" },
    { title: "Armor Plating", description: "For protection from radiation, space debris, etc" },
    { title: "Warp Laser Cannon", description: "Well, you're building a spaceship, and what good is a spaceship without a warp laser cannon?" },
    { title: "Fuel Tank", description: "One of the essentials" },
    { title: "Lucky Martian's Foot", description: "You just need one" }

  ]

  await Item.insertMany(items)
  console.log("Created items!")
}
const run = async () => {
  await main()
  db.close()
}

run()