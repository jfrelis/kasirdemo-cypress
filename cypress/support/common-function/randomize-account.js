import { faker } from '@faker-js/faker'

class RandomizeAccount {
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
}

module.exports = new RandomizeAccount();
