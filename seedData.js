const seedBoard = [
    {
        type: 'Wood',
        description: 'Woody Flavor',
        rating: 3.5
        
    },
    {
        type: 'Cobblestone',
        description: 'rocky flavor',
        rating: 4
        
    },
    {
        type: 'Plastic',
        description: 'chemical flavor',
        rating: 1
        
    }

]
const seedCheese = [
    {
       title:'Cheddar',
       description:'Bitter'
    },
    {
        title:'American',
        description:'Fake'
    },
    {
        title:'Swiss',
        description:'Holes'
    }
]

const seedUser = [
    {
       name:'Axl',
       email:'some_email@gmail.com'
    },
    {
        name:'Gabriel',
        email:'not_some_email@gmail.com'
    },
    {
        name:'Not Axl',
        email:'definitely_not_some_email@gmail.com'
    }
]

module.exports ={
    seedCheese,
    seedUser,
    seedBoard
}