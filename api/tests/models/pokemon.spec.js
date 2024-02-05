const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('Should throw an error if name is null', async() => {
        try{
          await Pokemon.create({  
          life: "36",
          attack: "56",
          defense: "41",
          speed: "91",
          height: "5",
          weight: "61",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
          types: [13, 6]})
        }catch(err){
          expect(err.message).to.equal(
            "notNull Violation: Pokemon.name cannot be null",

          );
        }
      
     
      });
      it('Should work when its a valid name', async () => {
        await Pokemon.create( {
          name: 'Pikachu',
          life: "36",
          attack: "56",
          defense: "41",
          speed: "91",
          height: "5",
          weight: "61",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
          types: [13, 6]
        });
        const pokemon = await Pokemon.findOne({
          where: {
            name: 'Pikachu'
          }
        });
        expect(pokemon.name).to.equal('Pikachu')
      });
    });
  });
});
