'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) =>  {
    await queryInterface.bulkInsert('Products', [{
      name: 'pizza',
      description: 'Pizza de jamon y queso',
      image: 'https://busytoddler.com/wp-content/uploads/2020/03/bigkid-activities.jpg',
      price: 500,
      categorie_id:1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'pizza',
      description: 'Pizza de jamon ',
      image: 'https://busytoddler.com/wp-content/uploads/2020/03/bigkid-activities.jpg',
      price: 400,
      categorie_id:1,
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'pizza',
      description: 'Pizza de morron ',
      image: 'https://busytoddler.com/wp-content/uploads/2020/03/bigkid-activities.jpg',
      price: 450,
      categorie_id:1,
      createdAt: new Date,
      updatedAt: new Date
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
