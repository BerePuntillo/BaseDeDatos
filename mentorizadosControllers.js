//cuando se crea un nuevo cliente

const Mentorizados = require('../models/Mentorizados');

exports.nuevoMentorizados = async (req, res, next ) => {
    // TODO : Insertar en la base de datos

//crear objeto de mentor con datos de req.body
    const mentorizados = new Mentorizados(req.body);
    try {
        await mentorizados.save();
        res.json({ mensaje : 'El Mentorizado se agregó correctamente'});
        console.log(req.body);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Obtener todos los mentores
exports.obtenerMentorizados = async (req, res, next) => {
    try {
        const mentorizados = await Mentorizados.find({});
        res.json(mentorizados); 
    } catch (error) {
        console.log(error);
        next();
    }
}
//Obtiene mentorizado con ID especifico
exports.obtenerMentorizado = async (req,res,next)=>{
    try{
        const mentorizados= await Mentorizados.findById(req.params.id);
        res.json(ment);
    }catch(error){
        console.log(error);
        next();
    }

}

//Actualizar registros por id
exports.actualizarMentorizados = async (req, res, next) => {
    try {
        const mentorizados = await Mentorizados.findOneAndUpdate({_id : req.params.id}, req.body, {
            new : true
        });
        res.json(mentorizados); 
    } catch (error) {
        console.log(error);
        next();
    }
}

//delete
exports.eliminarMentorizado = async(req, res, next) => {
    try {
        await Mentorizados.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El mentorizado fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}