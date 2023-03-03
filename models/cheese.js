const {sequelize} = require('../db')
const { Sequelize, Model } = require('sequelize');

class Cheese extends Model{

}

Cheese.init({title:Sequelize.STRING, description: Sequelize.STRING}, {sequelize})

module.exports = {
    Cheese
}