const db = require('../db')
const Item = require('../models/item')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {


  const items = [
    { title: "Hyperspace Engine", link: "An engine for travelling through hyperspace" },
    { title: "Sensor Dish", link: "A module for detecting space junk, asteroids, and malicious attacks" },
    { title: "Escape Pods", link: "For when all hell breaks loose" },
    { title: "Armor Plating",  link: "For protection from radiation, space debris, etc" },
    { title: "Warp Laser Cannon", link: "Well, you're building a spaceship, and what good is a spaceship without a warp laser cannon?" },
    { title: "Fuel Tank", link: "One of the essentials" },
    { title: "Lucky Martian's Foot", link: "You just need one" }

  ]

  await Item.insertMany(items)
  console.log("Created items!")
}
const run = async () => {
  await main()
  db.close()
}

run()