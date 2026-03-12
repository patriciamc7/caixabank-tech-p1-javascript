import { loadPokemons } from "./pokemons.js";

const pokemons = await loadPokemons(2);
const container = document.getElementById("pokemons");

pokemons.forEach((pokemon) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <p>ID: ${pokemon.id}</p>
    <p>Name: ${pokemon.name}</p>
    <p>Weight: ${pokemon.weight}</p>
    <p>Height: ${pokemon.height}</p>
  `;
  container.appendChild(div);
});
