const Ingredients = require('../../models/ingredients.models')


Ingredients.bulkCreate([
    {
        id: 'cdea51a0-b247-408d-97c5-c0a4564c6bf8',
        name: 'Agua',
        typeId: 10,
        urlImg: 'http://localhost:9000/images/agua.jpg',
        
    },
    {
        id: '5042ee65-a867-41a7-96af-b128c66fde0b',
        name: 'Queso Mozzarella',
        typeId: 2,
        urlImg: 'http://localhost:9000/images/queso_mozzarella.jpg'
    },
    {
        id: '0e2a6567-7e93-46ea-94ca-59be5130863d',
        name: 'Carne Molida de res',
        typeId: 9,
        urlImg: 'http://localhost:9000/images/carne_molida_de_res.jpg'
    },{
        id: '40e7ad11-a49c-4dfc-b4e5-0e5164c13501',
        name: 'Sal',
        typeId: 12,
        urlImg: 'http://localhost:9000/images/sal.jpg'
    },{
        id: 'c79a9605-a285-4088-b577-caa059beae90',
        name: 'Queso Parmesano',
        typeId: 2,
        urlImg: 'http://localhost:9000/images/queso_parmesano.jpg'
    },{
        id: 'fbade855-a35f-4384-83c2-86d3253815e8',
        name: 'Queso ricotta',
        typeId: 2,
        urlImg: 'http://localhost:9000/images/queso_ricota.jpg'
    },{
        id: 'a321136b-ba31-4af0-b732-88e0d249a961',
        name: 'Perejil',
        typeId: 5,
        urlImg: 'http://localhost:9000/images/perejil.jpg'
    },{
        id: '98f0c900-e9f0-435b-87b1-3f4220eddff1',
        name: 'Huevo',
        typeId: 9,
        urlImg: 'http://localhost:9000/images/huevo.jpg'
    },{
        id: '92867f4c-e9e3-453f-8b2d-1ae7b39f47f0',
        name: 'Salsa de Jitomate',
        typeId: 1,
        urlImg: 'http://localhost:9000/images/aceite_de_trufa.jpg'
    },{
        id: 'ba4195dd-fa91-4224-ba1e-f35144d398ec',
        name: 'Aceite de Canola',
        typeId: 1,
        urlImg: 'http://localhost:9000/images/aceite_de_canola.jpg'
    },
    {
        id: '712780a6-03c0-4e80-b3e4-b6592d4c8f3f',
        name: 'Pasta para Lasagna',
        typeId: 7,
        urlImg: 'http://localhost:9000/images/pasta_para_lasagna.jpg'
    },
    {
        id: '227cede3-8597-41a8-85d6-7f1a76336f84',
        name: 'Cafe espresso',
        typeId: 10,
        urlImg: 'http://localhost:9000/images/cafe_espresso.jpg'
    },
    {
        id: '29b66e63-d710-434c-a2b7-b464e9a4fa9b',
        name: 'Hielos',
        typeId: 10,
        urlImg: 'http://localhost:9000/images/hielos.jpg'
    },
    {
        id: '8d83b98a-105d-4b41-9e30-e70b90594af4',
        name: 'Licor 43',
        typeId: 11,
        urlImg: 'http://localhost:9000/images/licor_43.jpg'
    },
    {
        id: 'bdda3cab-4af3-47a8-9300-3b9389baa54a',
        name: 'Bebida Energetica',
        typeId: 10,
        urlImg: 'http://localhost:9000/images/licor_43.jpg'
    },
    {
        id: '6165f28c-2770-4e42-9db9-259223725ab7',
        name: 'Jägermeister',
        typeId: 11,
        urlImg: 'http://localhost:9000/images/jagermeister.jpg'
    },
])