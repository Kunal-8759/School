const { StatusCodes } = require('http-status-codes');
const SchoolService = require ('../services/schoolService');

async function addSchool(req,res){
    try {
        console.log("hii");
        console.log(req.body);
        const response =await SchoolService.addSchool(req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"School added successfully",
            data:response,
            error:{}
        });
    }catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            message:"something went wrong",
            data:{},
            error:error
        });
    }
}


module.exports = { addSchool };
