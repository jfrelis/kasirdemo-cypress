import { faker } from '@faker-js/faker'

class Randomize {
    constructor() {
        this.randomName = '';
    }

    name() {
        this.randomName = faker.person.firstName();
        return this.randomName
    }

    email() {
        return this.randomName + '@test.com';
    }

    password() {
        return this.randomName + '123';
    }

    product_code() {
        return 'QAPROD' + faker.number.int()
    }

    product_name() {
        return 'qa-product-' + faker.date.recent()
    }

    phone_number() {
        return faker.number.int()
    }
}

module.exports = new Randomize();
