const {MedicalRecord} = require('../models');

class MedicalRecordController {
    constructor(){}

    async indexAll(){
        return MedicalRecord.findAll();
    }

    async findById(id){
        return MedicalRecord.findOne({where:{id}});
    }

    
}

let medicalRecordController = new MedicalRecordController;

module.exports = medicalRecordController;