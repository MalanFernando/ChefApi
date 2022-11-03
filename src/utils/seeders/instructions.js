const uuid = require('uuid')

const Instructions = require('../../models/instructions.models')


Instructions.bulkCreate([
    {
        id:uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        step: 1,
        description: 'Calienta el horno a 180 grados centígrados.'
    },
    {
        id:uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        step: 2,
        description: 'En un recipiente hondo mezcla 1 taza de queso mozzarella, todo el queso ricotta, y 1/4 de taza de queso parmesano.'
    },
    {
        id:uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        step: 3,
        description: 'En un sartén cocina la carne molida hasta que esté cocida, retira todo el agua que haya soltado y agrega la salsa de jitomate y la taza de agua. Mezcla bien.'
    },
    {
        id:uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        step: 4,
        description: 'Engrasa un refractario para hornear con espray vegetal y coloca una capa del relleno de carne molida, luego una capa de 3 láminas de lasagna y una capa de la mezcla de quesos. Repite esto dos veces y en la última capa coloca 3 laminas de lasagna, mezcla de carne molida y por último la mezcla de quesos.'
    },
    {
        id:uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        step: 5,
        description: 'Agrega el queso restante mozzarella y parmesano encima de la lasagna y cubre con papel aluminio.'
    },
    {
        id:uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        step: 6,
        description: 'Hornea por 45 minutos, luego retira el papel aluminio y hornea por 15 minutos más para que se dore el queso.'
    },
    {
        id:uuid.v4(),
        recipeId: '1857e885-78ac-48b4-86ab-693b7d85f5bc',
        step: 7,
        description: 'Retira del horno, decora con el perejil picado y sirve.'
    },
    {
        id:uuid.v4(),
        recipeId: '8efe80b6-ec2b-4133-bfca-3839e7c741df',
        step: 1,
        description: 'Prepara el café espresso.'
    },
    {
        id:uuid.v4(),
        recipeId: '8efe80b6-ec2b-4133-bfca-3839e7c741df',
        step: 2,
        description: 'Pon hielo en un vaso tipo old fashion. Agrega el licor 43.'
    },
    {
        id:uuid.v4(),
        recipeId: '8efe80b6-ec2b-4133-bfca-3839e7c741df',
        step: 3,
        description: 'Lleva a la mesa la taza de café y aparte el vaso con el licor 43.'
    },
    {
        id:uuid.v4(),
        recipeId: '8efe80b6-ec2b-4133-bfca-3839e7c741df',
        step: 4,
        description: 'Sirve el café en el momento y revuelve para que se mezclen las dos bebidas.'
    },
    {
        id:uuid.v4(),
        recipeId: '52472541-787f-4a64-804d-011a6e0dd44b',
        step: 1,
        description: 'En un caballito de 1 1/2 onzas se coloca el licor de hierbas.'
    },
    {
        id:uuid.v4(),
        recipeId: '52472541-787f-4a64-804d-011a6e0dd44b',
        step: 2,
        description: 'Luego se coloca el vaso boca abajo para introducir el caballito y una vez tocando el fondo se da la vuelta.'
    },
    {
        id:uuid.v4(),
        recipeId: '52472541-787f-4a64-804d-011a6e0dd44b',
        step: 3,
        description: 'Para finalizar se coloca la bebida energetica hasta llenar el vaso.'
    }
])