//cuando se crea un nuevo cliente

const Mentor = require('../models/Mentor');

exports.nuevoMentor = async (req, res, next ) => {
    // TODO : Insertar en la base de datos

    //crear objeto de mentor con datos de req.body
    const mentor = new Mentor(req.body);
    try {
        await mentor.save();
        res.json({ mensaje : 'El Mentor se agregó correctamente'});
        console.log(req.body);
    } catch (error) {
        console.log(error);
        next();
    }
        
}

//Obtener todos los mentores

exports.obtenerMentores = async (req, res, next) => {
    try {
        const mentores = await Mentor.find({});
        res.json(mentores); 
    } catch (error) {
        console.log(error);
        next();
    }
}