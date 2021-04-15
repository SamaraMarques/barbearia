module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Horario', {
    data: {
      allowNull: false,
      type: DataTypes.DATE
    },
    nome: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
  });
};
