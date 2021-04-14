const request = require("supertest");
const app = require("../src/app");

describe("Test app responses", () => {
  test("It should response the GET method on root path", async () => {
    const response = await request(app).get("/");

    expect(response.text.includes('Barbearia Compasso')).toBe(true);
    expect(response.text.includes('Home')).toBe(true);
    expect(response.text.includes('Produtos')).toBe(true);
    expect(response.text.includes('Agendar')).toBe(true);
    expect(response.text.includes('Sobre a Barbearia Compasso')).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.ok).toBe(true);
  });

  test("It should response the GET method on /produtos path", async () => {
    const response = await request(app).get("/produtos");

    expect(response.text.includes('Na tesoura ou máquina, como o cliente preferir')).toBe(true);
    expect(response.text.includes('Corte e desenho profissional de barba')).toBe(true);
    expect(response.text.includes('Pacote completo de cabelo e barba')).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.ok).toBe(true);
  });

  test("It should response the GET method on /agendar path", async () => {
    const response = await request(app).get("/agendar");

    expect(response.text.includes('Agendar Horário - Barbearia Compasso')).toBe(true);
    expect(response.text.includes('Seu nome...')).toBe(true);
    expect(response.text.includes('Seu whatsapp...')).toBe(true);
    expect(response.statusCode).toBe(200);
    expect(response.ok).toBe(true);
  });
});