'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'slug',{
      type: Sequelize.STRING
    }),
    queryInterface.addColumn('Products', 'description', {
      type: Sequelize.TEXT("long")
    }),
    queryInterface.addColumn('Products', 'is_published', {
      type: Sequelize.BOOLEAN
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'slug'),
    queryInterface.removeColumn('Products', 'description'),
    queryInterface.removeColumn('Products', 'is_published')
  }
};
