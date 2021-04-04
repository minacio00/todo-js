const database = require('../database/db');

module.exports = {
    async create (req, res){
        const {title,body,user_id} = req.body;
        // console.log(name);
        await database('notes').insert({
            title,
            body,
            user_id
        });
       return res.json({
           check: "ok"
       }); 
    },

    async index (req, res) {
        const notes = await database('notes').select('id','title','body','user_id');
        // console.log(savedUsers);
        return res.json(notes);
    },

    async show (req, res){
        console.log(req.body.user_id);
        const user_id = req.body.user_id;
        const notes = await database('notes')
            .select('id','title','body','user_id')
            .where('user_id',user_id);
        return res.json(notes);
    },

    async deleteNotes (req,res){
        const noteId = req.params.id;
        const userId = req.headers.authorization;

        const note = await database('notes')
            .where('id',noteId)
            .first();
        
        if(note.user_id != userId){
            return res.status(401).json({error: "fail"});
        }
        await database('notes')
            .del()
            .where('id',noteId);

        return res.status(204).send();
    }
}