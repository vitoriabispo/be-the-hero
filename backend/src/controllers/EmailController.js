const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const id = request.headers.authorization;

        const ongs = await connection('ongs')
            .where('id', id)
            .select('name')
            .select('id');

        return response.json(ongs);
    }
}
