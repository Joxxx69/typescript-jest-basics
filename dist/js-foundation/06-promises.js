"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((response) => response.json())
        .then((pokemon) => pokemon.name)
        .catch((err) => console.log('Por favor intente de nuevo'))
        .finally(() => console.log('Finalmente'));
};
exports.getPokemonById = getPokemonById;
