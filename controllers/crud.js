const conexion = require('../database/db');

exports.save = (req, res)=>{
    const user = req.body.user;
    const apellidos = req.body.apellidos;
    const correo = req.body.correo;
    const fecha = req.body.fecha;
    conexion.query('INSERT INTO datospersonas SET ?', {nombres:user, apellidos:apellidos, correo:correo, fecha:fecha}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/')
        }
    })

}