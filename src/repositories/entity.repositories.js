const axios = require('axios');
let respuesta = {
    data: null,
    error: null,
    message: null
}
const getEntities = async (rangeToFound) => {
    try {
        let start = 0;
        let end = 0;
        start = rangeToFound.startId ? rangeToFound.startId : 0;
        end = rangeToFound.endId ? rangeToFound.endId : 0;
        let lstEntitysRange = [];
        for(start; start <= end; start++){
            let response = await axios.get("https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/"+start+"").then(resp =>{
                return resp ? resp.data : resp.data.message;
            });
            lstEntitysRange.push(response);
        }

        if(lstEntitysRange.length > 0){
            respuesta.data = lstEntitysRange.sort((a,b) => {
                if(a.data.name < b.data.name) {return -1};
                if(a.data.name > b.data.name) {return 1};
                return 0;
            });
            respuesta.error = false;
            respuesta.message = "Exito en la operación"
        }
        
        return respuesta;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getEntities
}