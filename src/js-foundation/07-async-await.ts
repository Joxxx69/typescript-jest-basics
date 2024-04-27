const {httpClientPlugin: http} = require('../plugins');


const getPokemonById = async(id:number|string):Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon =await http.get(url);
    return pokemon.name;
}

//const getPokemonById = async(id) => {
//    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//    try {
//        const response = await fetch(url);
//        const pokemon = await response.json();
//        return pokemon.name;
//    } catch (error) {
//        throw new Error(error)
//    }


//}


export { getPokemonById };