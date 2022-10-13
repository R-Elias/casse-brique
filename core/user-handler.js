const User = require("./../models/db-user")

function addUser(username){
    return new Promise((resolve, reject) => {
        const user = new User({
            username: username
        })
        User.create(user)
            .then((result)=>{
                resolve(result)
            })
            .catch((err)=>{
                reject(err)
            })
    })
}

function allUsers(){
    return new Promise((resolve, reject) => {
        User.find()
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

module.exports = {addUser, allUsers}