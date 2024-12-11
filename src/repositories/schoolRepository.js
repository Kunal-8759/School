const { where } = require('sequelize');
const { School } = require('../models');

async function addSchool(schoolData){
    const response = await School.create(schoolData);
    return response;
}

async function getSchool(schoolData){
    const response = await School.findOne(schoolData);
    return response;
}

module.exports ={
    addSchool,
    getSchool
};