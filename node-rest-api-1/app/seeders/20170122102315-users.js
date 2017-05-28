'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      email: "foo@bar.com",
      password: "$6$7d501e69$0dc2358f3462c33edfbc8dfd5f9f6e7e22505718eb58706a8224c7d099fe8ed1a34ca748731db3ca2cac007532c98923ce49ca16e2a49e8f1f851935ccd43d56",
      status: "active",
      first_name: 'foo',
      last_name: 'bar',
      createdAt: (new Date()),
      updatedAt: (new Date())
    }], {})
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
