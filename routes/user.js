const express = require("express")
const userHandler = require('./../core/user-handler.js')

const router = express.Router()

router.get('/all-users', async function(req, res){
    try{
        let allUsersRes = await userHandler.allUsers() 
        res.status(200).json(allUsersRes)
    }
    catch(err){
        let errorMsg = {error: err}
        res.status(400).json(errorMsg)
    }
})

router.post('/add-user', async function(req, res){
    try{
        console.log('  - Saved username ', req.body.username)
        let addUserRes = await userHandler.addUser(req.body.username)
        res.status(200).json(addUserRes)
    }
    catch(err){
        let errorMsg = {error: err}
        res.status(400).json(errorMsg)
    }
})

module.exports = router