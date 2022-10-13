const express = require("express")
const scoreHandler = require('./../core/score-handler.js')

const router = express.Router()

router.post('/add-score', async (req, res) =>{
    try{
        //console.log('  - Saved score ', res)
        let scoreResult = await scoreHandler.addScore(req.body.score, req.body.username)
        console.log('  - Saved score ', scoreResult.score)
        res.status(200).json(scoreResult)
    }
    catch(err){
        let errorMsg = {error: err}
        res.status(400).json(errorMsg)
    }
})

router.get('/all-scores', async function(req, res){
    try{
        let allScoresRes = await scoreHandler.allScores()
        res.status(200).json(allScoresRes)
    }
    catch(err){
        let errorMsg = {error: err}
        res.status(400).json(errorMsg)
    }
})

module.exports = router