const Score = require("./../models/db-score")

function addScore(score, username){
    try{
        return new Promise((resolve, reject) => {
            const resScore = new Score({
                score: score,
                username: username
            })
            //res_score.save()
            Score.create(resScore)
                .then((result)=>{
                    //console.log("Successfully saved !")
                    resolve(result)
                })
                .catch((err)=>{
                    reject("Problème lors de l'enregistrement du score")
                })
            })
    }
    catch(err){
        console.log("!!!! Erreur dans addScore !!!!")
    }
}

function allScores(){
    return new Promise((resolve, reject) => {
        Score.find()
            .then((result)=>{
                console.log(result)
                resolve(result)
            })
            .catch((err)=>{
                console.log(err)
                reject(err)
            })
    })
}

module.exports = {addScore, allScores}