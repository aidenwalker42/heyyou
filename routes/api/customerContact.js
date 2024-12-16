import express from 'express'

import {loadCustomerContactCollection, loadWebsiteModificationCollection} from '../../functions/loadCollections.js';


const router = express.Router()
//Get Posts
router.get('/', async (req, res) => {
    res.status(201).send("Hello world")
})

//Add Post
router.post('/', async (req, res) => {

})

//Update Post

//Delete Post



module.exports = router;