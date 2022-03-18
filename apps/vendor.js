'use strict';

const {faker}= require('@faker-js/faker');

    let storeName = {
        store: "my store",
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    };




module.exports = storeName;