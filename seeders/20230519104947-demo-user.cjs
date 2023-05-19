"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        password:
          "$2b$10$LS8czF3m1IRPZRzgdkyWHOsQDcMz/H3TYkFEbMqKLDf.RyrkBrYAi",
        salt: "$2b$10$LS8czF3m1IRPZRzgdkyWHO",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
