const {sequelize} = require('../db')
const { Sequelize, Model } = require('sequelize');

class User extends Model{

}

User.init({name:Sequelize.STRING, email: Sequelize.STRING}, {sequelize})

module.exports = {
    User
}