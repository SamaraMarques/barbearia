const request = require('supertest');
const app = require('../src/app');

const truncate = require('./utils/truncate');
const faker = require('faker');

const { Horario } = require('../src/app/models');

const newFakeHorario = () => {

  const data = faker.date.future().toISOString();
  const dia = data.slice(0, 10);
  const hora = data.slice(11, 19) + '00:00';

  return ({
    nome: faker.name.findName(),
    whatsapp: faker.phone.phoneNumber(),
    dia,
    hora
  });
};

describe('CRUD Horarios', () => {

  beforeEach(async () => {
    await truncate();
  });

  it('Novo horário', async () => {

    let horario = newFakeHorario();

    const response = await request(app)
      .post('/agendar')
      .send(horario);

    expect(response.status).toEqual(200);
    expect(response.text.includes('Horário agendado com sucesso!')).toBe(true);
  });

  it('Excluir Horário', async () => {

    let horario = newFakeHorario();

    await request(app)
      .post('/agendar')
      .send(horario);

    let response = await request(app)
      .get('/admin');

    expect(response.text.includes('Sem horários agendados!')).toBe(false);

    await request(app)
      .get('/deletar/2');

    response = await request(app)
      .get('/admin');

    expect(response.status).toEqual(200);
    expect(response.text.includes('Sem horários agendados!')).toBe(true);
  });

  it('Listar Horários', async () => {

    let response = await request(app)
      .get('/admin');

    expect(response.status).toEqual(200);
    expect(response.text.includes('Sem horários agendados!')).toBe(true);


    let horario = newFakeHorario();

    await request(app)
      .post('/agendar')
      .send(horario);

    response = await request(app)
      .get('/admin');

    expect(response.status).toEqual(200);
    expect(response.text.includes('Sem horários agendados!')).toBe(false);
  });
});
