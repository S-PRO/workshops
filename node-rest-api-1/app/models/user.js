module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    first_name: { type: DataTypes.STRING(255), allowNull: false },
    last_name: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    status: { type: DataTypes.ENUM('active', 'blocked'), allowNull: false, defaultValue: 'active' },
    password: { type: DataTypes.STRING(255), allowNull: false },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
  });
};
