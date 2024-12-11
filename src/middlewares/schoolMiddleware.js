const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/appError");

function validateAddSchool(req,res,next){
    if(!req.body.name){
        
        return res.status(StatusCodes.BAD_REQUEST).json({
            sucess:false,
            message:"something went wrong while adding School",
            error:new AppError('name not found in the incoming request in the Correct Form',StatusCodes.BAD_REQUEST),
            data:{}
        })
    }
    if(!req.body.address){
        
        return res.status(StatusCodes.BAD_REQUEST).json({
            sucess:false,
            message:"something went wrong while creating School",
            error:new AppError('adress not found in the incoming request in the Correct Form',StatusCodes.BAD_REQUEST),
            data:{}
        })
    }
    if(!req.body.latitude){
        
        return res.status(StatusCodes.BAD_REQUEST).json({
            sucess:false,
            message:"something went wrong while creating School",
            error:new AppError('latitude not found in the incoming request in the Correct Form',StatusCodes.BAD_REQUEST),
            data:{}
        })
    }

    if(!req.body.longitude){
        
        return res.status(StatusCodes.BAD_REQUEST).json({
            sucess:false,
            message:"something went wrong while creating School",
            error:new AppError('longitude not found in the incoming request in the Correct Form',StatusCodes.BAD_REQUEST),
            data:{}
        })
    }
    next();
}



module.exports={
    validateAddSchool
}
