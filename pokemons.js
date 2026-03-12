
class Pokemon {
  constructor(id, name, weight, height) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
}

export const loadPokemons = async (n) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
  const  data  = await response.json();
  const pokemons = [];

  pokemons.push(new Pokemon(data.id, data.name, data.weight, data.height));

  return pokemons;
};
