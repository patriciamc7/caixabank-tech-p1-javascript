import { loadPokemonInfo } from "./pokemons.js";

const container = document.getElementById("pokemonInfo");

const p = await loadPokemonInfo(
  new URLSearchParams(window.location.search).get("id"),
);

const pokemon = p[0];
container.innerHTML = `
  <h2>${pokemon.name}</h2>
  <p>ID: ${pokemon.id}</p>
  <p>Weight: ${pokemon.weight}</p>
  <p>Height: ${pokemon.height}</p>
`;
