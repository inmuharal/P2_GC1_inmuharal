const {Company} = require('../models')

class CompanyController {
    static async read(req, res) {
        try {
            
            const companies = await Company.findAll({
                include : {
                    model : Job,
                    attributes : {
                        exclude : ["createdAt", "updatedAt"]
                    }   
                },
                attributes : {
                    exclude : ["createdAt", "updatedAt"]
                }
            })
            
            res.status(200).json({
                message: "Read Companies Succeed",
                data: companies
            })  
            
        } catch (error) {
            console.log(error);
            
            res.status(500).json({
                message: "Internal server error"
            })
            
        }
    }
    
    static async create(req, res, next) {
        try {    
            
            const {name, companyLogo, location, email, description} = req.body
            
            const company = await Company.create({ name, companyLogo, location, email, description })
            
            delete company.dataValues.updatedAt    
            delete company.dataValues.createdAt    
            
            res.status(201).json({
                message: "Succeed create new Company",
                data: company
            })
            
            
            
        } catch (error) {
            // console.log(error);
            next(err)
        }
    }
    
        static async update(req, res, next) {
        try {
            const { id } = req.params;
            const {name, companyLogo, location, email, description} = req.body
            
            const company = await Company.findByPk(id, {
  
                attributes : {
                    exclude : ["createdAt", "updatedAt"]
                }
            })
            
            if(!company) throw { name : "NotFound"}
        
            await company.update({ name, companyLogo, location, email, description })
            
            res.status(200).json({
                message: `Update company Succeed with id ${id} succeed`,
                data: company
            })  
            
        } catch (error) {
            next(err)
        }
    }
    
    
        static async getAllPublic(req, res, next) {
        try {
                const companies = await Company.findAll({
                include: [
                    { model: Job },
                     { model: User }
                ]
                });

                res.status(200).json(companies);
            } catch (error) {
                next(err)
            }
        }
}


    
module.exports = CompanyController