'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'john@email.com',
          role: 'admin',
          uuid: '3e44cea7-e4bf-40aa-a417-83689f4fa6bb',
          createdAt: '2021-09-18T05:19:47.117Z',
          updatedAt: '2021-09-18T05:19:47.117Z',
        },
        {
          name: 'Jane Doe',
          email: 'jane@email.com',
          role: 'admin',
          uuid: '0d0356a4-5e24-4156-a427-d34ab299e433',
          createdAt: '2021-09-18T05:19:47.117Z',
          updatedAt: '2021-09-18T05:19:47.117Z',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
