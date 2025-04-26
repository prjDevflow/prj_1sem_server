const db = require("./db");

async function insert(req,res) {
    try{
        const {nome}= req.body;

        if(nome){
            const resultado = await db.query(
            "INSERT INTO Curso (Nome) value ($1) RETURNING * "
            [nome]
            );
            res.json(resultado.row[0]);
         } else{
             res.status(400).json({message: "Nome é obrigatorio"});
         }
    } catch (e){
        res.status(500).json({message: "Erro ao processar requisição"});
    }  
}

async function  select(req,res) {
    try{
        const resultado = await db.query(
            "SELECT * FROM TABLE Curso ORDER BY name"
        );
        res.json(resultado.rows);
    } catch (e){
        res.status(500).json({message: "Erro ao processar requisição"})
    }
    
}

async function remove(req, res) {
    try{
        const{id} = req.body;

        if(id){
            const resultado = await db.query(
                "DELETE FROM Curso WHERE idCurso = $1 RETURNING *"
                [id]
            );
            res.json(resultado.rows[0]);
        } else{
            res.status(400).json({message: "ID e obrigatorio"});
        }
    }catch (e) {
        res.status(500).json({message: "Erro ao processar requisição"});
    }
}


async function update(req, res) {
    try{
        const {nome} = req.body;
        const {id} = req.body;

        if( id && nome){
            const resultado = await db.query(
                "UPDATE curso SET nome = $1 WHERE idCurso = $2 RETURNING *"
            );
            res.json(resultado.rows[0]);
        }else{
            res.status(400).json({message: "ID e nome sao obrigatorios"});
        }
    }catch (e) {
        res.status(500).json({message: "Erro ao processar requisição"});
    }
}