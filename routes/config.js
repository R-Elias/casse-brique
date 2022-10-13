const express = require("express")
const configHandler = require('./../core/config-handler.js')

const router = express.Router()

router.get("/", async function(req, res){
    try{
        let configRes = {layout: ""}
        configRes.layout = await configHandler.getConfig((req.query.layoutId).toString())
        res.status(200).json(configRes)
    }
    catch(err){
        let errorMsg = {error: err}
        res.status(400).json(errorMsg)
    }
})


router.get('/all-configs', async (req, res) => {
    try{
        let allConfigsRes = await configHandler.allConfigs()
        res.status(200).json(allConfigsRes)
    }
    catch(err){
        let errorMsg = {error: err}
        res.status(400).json(errorMsg)
    }
})

module.exports = router