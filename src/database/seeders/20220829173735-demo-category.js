'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "pizzas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "empanadas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
      await queryInterface.bulkDelete('Categories', null, {});
  }
};
