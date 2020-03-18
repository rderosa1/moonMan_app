const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.post('/change-password/:id', restrict, controllers.changePassword)
router.get('/verify', controllers.verifyUser);

router.put('/users/:id/items', restrict, controllers.updateWishlist)
router.put('/users/:userId/items/:itemId', restrict, controllers.deleteItemFromUser2)
router.get('/users/:id/items', controllers.getItemsFromUser)
router.get('/items', controllers.getAllItems)
router.get('/users', controllers.getAllUsers)
router.get('/items/:id', controllers.getItemById)
router.get('/users/:id', controllers.getUserById)
router.post('/items', restrict, controllers.createItem)
router.put('/items/:id', controllers.updateItem)
router.delete('/items/:id', restrict, controllers.deleteItem)

module.exports = router