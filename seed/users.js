const db = require('../db')
const User = require('../models/user')
const Item = require('../models/item')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const faker = require('faker')

const main = async () => {
    const bike=await Item.find({title:'bike'})
    const shoe=await Item.find({title:'shoe'})
    console.log(bike)
    
    const users = [
        {username: "rico", email: "ricoderosa@yaho.com", password_digest: "password", items: [bike[0]._id, shoe[0]._id]},
        {username: "elmo", email: "rgsdhsdha@yaho.com", password_digest: "pass", items: []},
        
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