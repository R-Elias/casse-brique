const Config = require("./../models/db-config")

// Renvoie la config demandée
function getConfig(layoutId){
    return new Promise((resolve, reject) => {
        let configRes = {layout: ""}
        /** Marche enfin ! */
        Config.findOne({title: {$eq: layoutId.toString()}})
            .then((result)=>{
                if(result === null || result.layout === null){
                    configRes.layout = "1 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0"
                }
                else{
                    configRes.layout = result.layout
                }
                resolve(configRes.layout)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}


function allConfigs(){
    return new Promise((resolve, reject) => {
        Config.find()
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

module.exports = {getConfig, allConfigs}
