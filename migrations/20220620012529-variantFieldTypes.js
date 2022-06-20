'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Variants', 'slug',{
      type: Sequelize.STRING
    }),
    queryInterface.addColumn('Variants', 'inventory', {
      type: Sequelize.INTEGER
    }),
    queryInterface.addColumn('Variants', 'description', {
      type: Sequelize.TEXT("long")
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Variants', 'slug'),
    queryInterface.removeColumn('Variants', 'inventory'),
    queryInterface.removeColumn('Variants', 'description')
  }
};
