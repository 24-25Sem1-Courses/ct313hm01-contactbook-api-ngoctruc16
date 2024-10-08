const { faker } = require('@faker-js/faker');

function createContact() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    phone: faker.string.numeric('09########'),
    favorite: faker.number.bigInt({
      min: 0,
      max: 1,
    }),
    avatar: '/public/images/blank-profile-picture.png',
  };
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('contacts').del();
  await knex('contacts').insert(Array(100).fill().map(createContact));
};
