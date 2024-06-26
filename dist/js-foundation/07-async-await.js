"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const { httpClientPlugin: http } = require('../plugins');
//const getPokemonById = async(id:number|string):Promise<string> => {
//    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//    const pokemon =await http.get(url);
//    return pokemon.name;
//}
const getPokemonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const response = yield fetch(url);
        const pokemon = yield response.json();
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon not found with ${id} `;
    }
});
exports.getPokemonById = getPokemonById;
