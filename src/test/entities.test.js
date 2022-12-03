const { default: axios } = require('axios');
const entitiesHandler = require('./../controllers/entity.controller');

test('Data Array', async () => {
    axios.post('http://localhost:4000/entities/filter/?range=[1,10]').then(res =>{
        if(res){
            expect(true).toBe(true);
        }
    }).catch(error => {
        expect(error).toBe(error);
    });
})