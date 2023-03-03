const {sequelize} = require('../db')
const { Sequelize, Model } = require('sequelize');

class Board extends Model{

}

Board.init({type:Sequelize.STRING, description: Sequelize.STRING, rating: Sequelize.INTEGER}, {sequelize})

module.exports = {
    Board
}