import { loadPokemons } from "./pokemons.js";

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

  pokemons.forEach((name) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a href="/pokemon?id=${name}">Name: ${name}</a>
  `;
    container.appendChild(div);
  });
});
