const Categories = require('../../models/categories.models')

Categories.bulkCreate([
    {id: 1,name: 'Postres'},
    {id: 2,name: 'A la parrilla'},
    {id: 3,name: 'Ensaladas'},
    {id: 4,name: 'Guarniciones'},
    {id: 5,name: 'Pescados y mariscos'},
    {id: 6,name: 'Botanas'},
    {id: 7,name: 'Pastas'},
    {id: 8,name: 'Sopas'},
    {id: 9,name: 'Desayunos'},
    {id: 10,name: 'Panes'},
    {id: 11,name: 'Platos fuertes'},
    {id: 12,name: 'Bebidas'}
])