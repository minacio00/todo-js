const database = require('../database/db');

module.exports = {
    async create (req, res){
        const {name} = req.body;
        console.log(name);
        
        await database('users').insert({
            name
        });

        const savedUsers = await database('users').select('id','name').where('name',name);
        return res.json(savedUsers[0].name);
    },

    async index (req, res) {
        const savedUsers = await database('users').select('id','name');
        // console.log(savedUsers);
        return res.json(savedUsers);
    },

    async delete(req,res){
       try{
            const userName  = req.params.name;
            await database('users')
            .del()
            .where('name',userName);

            return res.json({
                deleted: userName
            })
        }
        catch(e) {
            console.log(e);
        };
    }
};