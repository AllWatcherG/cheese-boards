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

    test('One to many test + Eager', async() => {
        await User.bulkCreate(seedUser)
        await Board.bulkCreate(seedBoard)
        const testAxl = await User.findByPk(1)
  
        const testBoards = await Board.findAll()
  
        await testAxl.addBoards(testBoards)
  
        let verifyData = await User.findByPk(1, {include:Board})
        expect(verifyData.Boards.length).toBe(3)

    });

    test('Many to Many + Eager', async()=>{
        await Board.bulkCreate(seedBoard)
        await Cheese.bulkCreate(seedCheese)
        let testBoard = await Board.findAll()
        let testCheese = await Cheese.findAll()
        for(let i = 0; i < testBoard.length; i++){
            await testBoard[i].addCheeses(testCheese)
        }
        for(let i = 0; i < testCheese.length; i++){
            await testCheese[i].addBoards(testBoard)
        }

        const verifyBoard= await Board.findByPk(1, {include:Cheese})
        test = verifyBoard
        const verifyCheese = await Cheese.findByPk(1, {include: Board})
        test2 = verifyCheese
        expect(test.Cheeses.length).toBe(3)
        expect(test2.Boards.length).toBe(3)

    });



})