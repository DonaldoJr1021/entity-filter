const entityRepository = require('./../repositories/entity.repositories')

const getEntitiesRange = async (range) => await entityRepository.getEntities(range);
const handler = async (req, res) => {

    let rangeToFilter = [];
    const range = {
        startId: 0,
        endId: 0
    };

    rangeToFilter = req.query.range ? req.query.range.split(',') : 0;
    if(rangeToFilter.length == 0){
        res.status(400)
        res.json({message: 'Error, no se encuentra para el rango especificado'});
    }else{
        range.startId = rangeToFilter[0].replace('[', '');
        range.endId = rangeToFilter[1].replace(']', '');
            let lstResponse = await getEntitiesRange(range);
            if (lstResponse.error) {
                res.status(404);
                res.json({message: 'Error en los datos de entrada'})
            }else{
                let responseEntityFilter = lstResponse.data;
                res.status(200)
                res.json({responseEntityFilter});
            }
    }
}

module.exports = {
    handler
}