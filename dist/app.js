"use strict";
//import {emailTemplate as email} from './js-foundation/01-template';
//console.log(email);
//require('./js-foundation/02-destructuring')
//-callbacks
//import { getUserById} from './js-foundation/03-callbacks'
//getUserById(2, (error, user) => {
//    if (error) {
//        throw new Error(error);
//    }
//    console.log(user);
//});
//- Application of adapter pattern and factory pattern - Referencia a la funcion factory y su uso
//import {buildMakePerson} from './js-foundation/05-factory-function'
//import {getAge, getUUID} from './plugins'
//const obj = { name: 'Santiago', birthdate: '2001-02-10' };
//const makePerson = buildMakePerson({ getAge, getUUID });
//const santiago = makePerson(obj);
//console.log(santiago);
//- promises
//import {getPokemonById} from './js-foundation/06-promises';
//getPokemonById(4).then(console.log).catch(console.log);
//- async/await
//import { getPokemonById} from './js-foundation/07-async-await';
//getPokemonById(4).then(console.log).catch(console.log);
//-logger - winston
//import {buildLogger} from './plugins'
//const logger = buildLogger('app.js');
//logger.log('Hola mundo');
//logger.error('Esto es algo malo');
//logger.warn('advertencia');
