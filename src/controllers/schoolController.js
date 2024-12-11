const { StatusCodes } = require('http-status-codes');
const SchoolService = require ('../services/schoolService');

async function addSchool(req,res){
    try {
        const response =await SchoolService.addSchool(req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"School added successfully",
            data:response,
            error:{}
        });
    }catch (error) {
        return res.status(error.statusCode).json({
            success:false,
            message:error.message,
            data:{},
            error:error
        });
    }
}


module.exports = { addSchool };
