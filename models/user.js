module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    nick: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  },{
    paranoid: true
  });
}