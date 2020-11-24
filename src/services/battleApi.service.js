const axios = require('axios');
const {apiUrl,getSearch}=require('../services/constant');


export default class BattleService {

    getBattles = (search) => {
        return axios({
            method: "GET",
            url: `${apiUrl}${getSearch}` + search ,
        });
    };
    



}
