const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')
const fileName = path.resolve(__dirname, '../data/users.json');

const User = {
    fileName: path.resolve(__dirname, '../data/users.json'),

    findAll: function ()  {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

    findByPK: function (bodyId) {
        let userData =this.findAll();
        let userFound = userData.find(user => user.id = bodyId)
        return userFound
    },

    findByField: function (campo, bodyCampo){
        let userData = this.findAll();
        let userFound = userData.find(user => user[campo]==bodyCampo)
        return userFound
    },

    createUser : function (body) {
        let userData = this.findAll();
        let newUser = {
            id: Date.now(),
            ...body  
        } 
       
        userData.push(newUser)
        fs.writeFileSync(this.fileName,JSON.stringify(userData,null," "))
        return userData
    },

    deleteUser : function (bodyId){
        let userData = this.findAll();
        userData = userData.filter(user => user.id != bodyId)
        fs.writeFileSync(this.fileName,JSON.stringify(userData,null," "))
        return userData      


    }
}

module.exports = User
  /*Aca estoy */