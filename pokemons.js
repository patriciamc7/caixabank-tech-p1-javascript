
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
  for (let i = 1; i <= n; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const  data  = await response.json();
  
    pokemons.push(new Pokemon(data.id, data.name, data.weight, data.height));
  }

  return pokemons;
};
