const {User} = require('./user')
const {Board} = require('./board')
const {Cheese} =require('./cheese')


Board.belongsTo(User)
User.hasMany(Board)

Board.belongsToMany(Cheese, {through: 'BoardCheese'})
Cheese.belongsToMany(Board, {through: 'BoardCheese'})


module.exports = {
    User, 
    Board, 
    Cheese
}
