//const axios = require('axios');

import axios from 'axios';

const httpClientPlugin = {
    get: async (url:string) => {
        const {data} = await axios.get(url);
        return data;
        //const resp = await fetch(url);
        //return await resp.json();
    },
    post: async(url:string, body:object)=>{},
    put: async(url:string, body:object)=>{},
    delete: async(url:string)=>{}
}

export {
    httpClientPlugin
}