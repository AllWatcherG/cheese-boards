const {sequelize} = require('./db')
const {User, Board, Cheese} = require('./models/index')

const {
    seedCheese,
    seedUser,
    seedBoard
  } = require('./seedData');


describe('Cheese Board Project Tests', ()=>{

    beforeEach(async () => {
        await sequelize.sync({ force: true });
    });

    test('Can create cheese table', async () => {
        testCheese = await Cheese.bulkCreate(seedCheese)
        result = await Cheese.findAll({
            raw: true
        })

        expect(result.length).toBe(seedCheese.length)
        for(let i = 0; i < result.length; i++){
            foundObj = result[i]
            knownObj = seedCheese[i]

            expect(foundObj.title).toBe(knownObj.title)
            expect(foundObj.description).toBe(knownObj.description)
        }
    });

    test('Can create User table', async () => {
        testUser= await User.bulkCreate(seedUser)
        result = await User.findAll({
            raw: true
        })

        expect(result.length).toBe(seedUser.length)
        for(let i = 0; i < result.length; i++){
            foundObj = result[i]
            knownObj = seedUser[i]

            expect(foundObj.name).toBe(knownObj.name)
            expect(foundObj.email).toBe(knownObj.email)
        }
    });

    test('Can create Board table', async () => {
        testBoard = await Board.bulkCreate(seedBoard)
        result = await Board.findAll({
            raw: true
        })

        expect(result.length).toBe(seedBoard.length)
        for(let i = 0; i < result.length; i++){
            foundObj = result[i]
            knownObj = seedBoard[i]

            expect(foundObj.type).toBe(knownObj.type)
            expect(foundObj.description).toBe(knownObj.description)
            expect(foundObj.rating).toBe(knownObj.rating)
        }
    });





})