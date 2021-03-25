module.exports = (sequelize, DataTypes) => {
  const Horario = sequelize.define('Horario', {
    data: {
      allowNull: false,
      type: DataTypes.DATE
    },
    nome: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
  });

  return Horario;
};
