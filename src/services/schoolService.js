const { StatusCodes } = require('http-status-codes');
const SchoolRepository = require('../repositories/schoolRepository');
const AppError = require('../utils/appError');

async function addSchool(schoolData){
    try{
        const findSchool = await SchoolRepository.getSchool(schoolData);
        if(findSchool){
            throw new AppError("School with the same details already exists",StatusCodes.CONFLICT);
        }
        const response = await SchoolRepository.addSchool(schoolData);
        return response;
    }
    catch(error){
        if(error.statusCode == StatusCodes.CONFLICT){
            throw error;
        }

        throw new AppError("Something went wrong while adding School",StatusCodes.INTERNAL_SERVER_ERROR);
        
    }
    
}

module.exports ={
    addSchool
}