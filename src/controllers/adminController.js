const admin = require('../models/user')
const products = require('../models/product')
const response = require('../helpers/respon')
const {comparePassword} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')


class adminController{
    static async postLogin(req, res){
        try {
            const {email, password, role} = req.body
            let cekData = await admin.findOne({
                where : {
                    email : email
                }
            })
            if (!cekData){
                return res.status(200).json({message : 'Invalid Email | Password'})
            }else {
                const isPassMatch = comparePassword(password, cekData.password)
                if (!isPassMatch) {
                    return res.status(200).json({message : 'Invalid Email | Password'})
                } else {
                    const token = generateToken({
                        id : cekData.id,
                        email : cekData.email,
                        role : cekData.role
                    })
                    return res.status(200).json({accessToken : token})
                }
            }
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async addPost(req, res){
        try {
            let data = await products.create({
                name : 'product',
                image_url : 'img_url',
                price : 10000,
                stock : 1
            })
            return response(200, data, 'Insert product successfuly', res)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async getAll(req, res){
        try {
            let data = await products.findAll()
            return response(200, data, 'Get all products successfuly', res)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }
}

module.exports = adminController