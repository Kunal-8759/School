const { School } = require('../models');

async function addSchool(schoolData){
    const response = await School.create(schoolData);
    return response;
}

module.exports ={
    addSchool
};