const { CustomApiError} = require('../errors/custom-errors')
const errorHandlerMiddleware = (err,req,res,next)=>{

    if(err instanceof CustomApiError){
        res.status(err.statusCode).json({msg: err.message})
    }

    return res.status(500).json({msg: 'something went very wrong'})
}

module.exports = errorHandlerMiddleware;