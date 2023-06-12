exports.verifyJWT = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const token = req.headers['x-access-token'];
    if (token === process.env.KEY_JWT){
        // se tudo estiver ok, salva no request para uso posterior
        next();
    } else{
        res.status(500).json({message: 'Acesso Negado!!'});
    }
}