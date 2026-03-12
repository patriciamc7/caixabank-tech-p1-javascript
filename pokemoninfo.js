import { loadPokemonInfo } from "./pokemons.js";

const container = document.getElementById("pokemonInfo");
console.log("window.location.href:", window.location.href);
console.log("window.location.search:", window.location.search);
const p = await loadPokemonInfo(
  new URLSearchParams(window.location.search).get("id"),
);

const pokemon = p[0];
container.innerHTML = `
  <h2>Name: ${pokemon.name} (ID: ${pokemon.id})</h2>
  <p>Weight: ${pokemon.weight}</p>
  <p>Height: ${pokemon.height}</p>
`;
