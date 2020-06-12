const mongoose=require('mongoose');
const axios=require('axios');

const countrySchema=new mongoose.Schema({
    country:String,totalConfirmed: Number,totalDeaths:Number,totalRecovered:Number,date:String
});

const Country=mongoose.model('Country',countrySchema);


module.exports.Country=Country;
// module.exports.updateDB=updateDB;