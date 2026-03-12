import { writeFile } from "fs/promises";
import { loadPokemons } from "./pokemons.js";

const pokemons = await loadPokemons(3);
console.log(pokemons);
// const html = render(pokemons);
// await writeFile('index.html', html);

