const { where } = require('sequelize');
const { School } = require('../models');

async function addSchool(schoolData){
    const response = await School.create(schoolData);
    return response;
}

async function getSchool(schoolData){
    const response = await School.findOne({
        where : {
            name : schoolData.name,
            address : schoolData.address,
            latitude : schoolData.latitude,
            longitude : schoolData.longitude
        }
    });
    return response;
}

async function getAllSchools(){
    const response = await School.findAll();
    return response;
}

module.exports ={
    addSchool,
    getSchool,
    getAllSchools
};