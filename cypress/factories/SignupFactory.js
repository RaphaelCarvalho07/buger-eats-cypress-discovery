var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: () => {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '21999999999',
            address: {
                postalcode: '22783121',
                street: 'Rua Professor Santos Moreira',
                number: 'S/N',
                details: 'Lote 200',
                district: 'Vargem Pequena',
                city_state: 'Rio de Janeiro/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}