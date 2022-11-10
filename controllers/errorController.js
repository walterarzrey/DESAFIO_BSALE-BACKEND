// Controla errores de url 404
exports.get404 = (req, res, next) => {
    res.status(404).json({message: 'Error 404'})
};