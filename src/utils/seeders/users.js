const uuid = require('uuid')
const {faker} = require('@faker-js/faker')

const Users = require('../../models/users.models')

// for(let i = 0; i < 10; i++){
//     Users.create(
//         {
//             id: uuid.v4(),
//             firstName: faker.name.firstName(),
//             lastName: faker.name.lastName(),
//             email: faker.internet.email(),
//             password: 'root',
//             phone: faker.phone.number(),
//             birthday: faker.date.birthdate()
//         }
//     )
// }
Users.create({
    id:'39bbcef5-bff2-4ea2-b0af-6a3b2c08fec9',
    firstName: 'Admin',
    lastName: 'Root',
    email: 'admin@admin.com',
    password: 'root',
    role: 'admin',
    phone: faker.phone.number(),
    birthday: '1996/09/08'
})