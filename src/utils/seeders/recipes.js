const Recipes = require('../../models/recipes.models')

Recipes.bulkCreate([
    {
        id: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        title: 'Lasagna Italiana',
        description: 'Una receta muy fácil de lasagna que te quedará deliciosa. Seguro se volverá en una de las recetas clásicas de tu hogar.',
        urlImg: 'http://localhost:9000/images/lasagna_italiana.jpg',
        time: 90,
        portions: 8,
        userId: '39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9',
        categoryId: 11,
        origin: 'Italian'
    },
    {
        id: '8efe80b6-ec2b-4133-bfca-3839e7c741df',
        title: 'Carajillo',
        description: 'Esta receta de carajillo es una mezcla de café y licor, muy rico',
        urlImg: 'http://localhost:9000/images/carajillo.jpg',
        time: 10,
        portions: 1,
        userId: '39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9',
        categoryId: 12,
        origin: ''
    },
    {
        id: '52472541-787f-4a64-804d-011a6e0dd44b',
        title: 'Perla negra',
        description: 'El perla negra es un coctel muy rico y suave, normalmente esta bebida es para ambientar las fiestas, te la recomiendo para elevar el ánimo y aparte disfrutar de un buen y dulce sabor.',
        urlImg: 'http://localhost:9000/images/perla_negra.jpg',
        time: 5,
        portions: 1,
        userId: '39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9',
        categoryId: 12,
        origin: ''
    }
])