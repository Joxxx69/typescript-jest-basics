

const getPokemonById = (id:number):Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((response) => response.json())
        .then((pokemon) => pokemon.name)
        .catch((err) => console.log('Por favor intente de nuevo'))
        .finally(()=> console.log('Finalmente'))
}


export {
    getPokemonById
};