const database = require('../database/db');

module.exports =
{
    async create(req,res){
        const {id} = req.body;

        const user = await database('users')
            .where('id', id)
            .select('name')
            .first();
        if(!user){
            return res.status(400).json({error: "no such user"});
        }
        return res.json(user);
    }
};