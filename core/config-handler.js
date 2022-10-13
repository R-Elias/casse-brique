const dbConfig = require("./../models/db-config")
const Config = dbConfig.Config
const Style = dbConfig.Style

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

function getStyleConfig(styleId){
    return new Promise((resolve, reject) => {
        let styleRes = {layout: ""}
        /** Marche enfin ! */
        Style.findOne({code: {$eq: styleId.toString()}})
            .then((result)=>{
                if(result === null || result.layout === null){
                    styleRes.layout = "red\ngreen\nblue"
                }
                else{
                    styleRes.layout = result.layout
                }
                console.log("styleRes : ", styleRes)
                console.log("styleRes.layout : ", styleRes.layout)
                resolve(styleRes.layout)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}

module.exports = {getConfig, allConfigs, getStyleConfig}