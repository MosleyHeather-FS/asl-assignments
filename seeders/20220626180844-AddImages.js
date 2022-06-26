'use strict';
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Images', [
      { id: 1, variantId: 1, extension: '1.png', createdAt, updatedAt },
      { id: 2, variantId: 2, extension: '2.png', createdAt, updatedAt },
      { id: 3, variantId: 3, extension: '3.png', createdAt, updatedAt },
      { id: 4, variantId: 4, extension: '4.png', createdAt, updatedAt }
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Images', null, {})
  }
};
