class Pokemon {
  constructor(id, name, weight, height) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
}

export const loadPokemons = async (n) => {
  const pokemons = [];
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}`);
  const data = await response.json();

  for (const { name } of data.results) {
    pokemons.push(name);
  }

  return pokemons;
};

export const loadPokemonInfo = async (name) => {
  const pokemons = [];
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  pokemons.push(new Pokemon(data.id, data.name, data.weight, data.height));
  return pokemons;
};
