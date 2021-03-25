const { Horario } = require('../models');

module.exports = {
  async criar(dados) {
    const {
      nome, dia, horario, whatsapp,
    } = dados;

    const data = dia + ' ' + horario;

    let horario_agendado;

    try {
      horario_agendado = await Horario.create({
        nome,
        data,
        whatsapp
      });

    } catch (error) {
      return { error };
    }

    return horario_agendado;

  },

  async index() {
    let horarios;
    try {
      horarios = await Horario.findAll();
    } catch (error) {
      return { error };
    }

    return horarios;
  },

  async deletar(id) {
    let horario_deletado;
    try {
      horario_deletado = await Horario.destroy({
        where: {
          id
        }
      });
    } catch (error) {
      return { error };
    }

    return horario_deletado;
  },

};
