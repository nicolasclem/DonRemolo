'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          name: "user-Test",
          body: "Comentario  de prueba 1",
        },
        {
          name: "user-Test2",
          body: "Comentario  de prueba 2",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Comment", null, {});
  },
};
