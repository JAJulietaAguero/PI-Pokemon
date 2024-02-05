/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
  life: "36",
  attack: "56",
  defense: "41",
  speed: "91",
  height: "5",
  weight: "61",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
  types: [13, 6]
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    ).timeout(10000);
    it('Responds a array whit 73 pokemons', async () => {
      try {
        const res = await agent.get('/pokemons');
        expect(res.body).to.have.lengthOf(73);
      } catch (error) {
        console.log(error);
      }
    }).timeout(10000);
    it('Respond with the pokemons that include that query', async () => {
      try {
        const res = await agent.get('/pokemons?name=bulbasaur');
        expect(res.body[0].name).to.deep.include('bulbasaur');
      } catch (error) {
        console.log(error)
      }
    }).timeout(10000);
    it('If an id parameter is passed invalid, respond with a 400', async () => {
      try {
        const res = await agent.get('/pokemons/1AS');
        expect(res.body).res(400);
      } catch (error) {
      
      }
    })
  });
  describe('GET /types', () => {
    it('Should get types 200', async () => {
      await agent.get('/types').expect(200)
    }).timeout(10000);
  })
  
  describe('POST /pokemons', () => {
    it('Responds with 200', async () => {
      try {
        await agent.post('/pokemons').send({
          name: "PIKACHU",
          life: "36",
          attack: "56",
          defense: "41",
          speed: "91",
          height: "5",
          weight: "61",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
          types: [1, 13]
        }).expect(200);
      } catch (error) {
        console.log(error)
      }
    });
    it('If you dont pass params, respond with a 400', async () => {
      try {
        await agent.post('/pokemons').send({
          name: "PIKACHU"
        }).expect(400)
      } catch (error) {
        console.log(error)
      }
    })
  })
});

