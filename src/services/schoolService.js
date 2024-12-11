const SchoolRepository = require('../repositories/schoolRepository');

async function addSchool(schoolData){
    try{
        const response = await SchoolRepository.addSchool(schoolData);
        return response;
    }
    catch(error){
        throw error
    }
    
}

module.exports ={
    addSchool
}