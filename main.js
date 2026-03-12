import { loadPokemons } from "./pokemons.js";

const pokemons = await loadPokemons(2);
const container = document.getElementById("pokemons");
const input = document.getElementById("numPokemons");
const button = document.getElementById("btnLoad");

button.addEventListener("click", async () => {
  const numPokemons = parseInt(input.value);
  if (isNaN(numPokemons)) {
    alert("Please enter a valid number.");
    return;
  }

  const pokemons = await loadPokemons(numPokemons);
  container.innerHTML = "";

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
});
