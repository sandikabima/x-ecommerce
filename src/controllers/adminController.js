const {user, product} = require('../models')
const response = require('../helpers/respon')
const {comparePassword} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')


class adminController{
    static async postLogin(req, res){
        try {
            const {email, password, role} = req.body
            let cekData = await user.findOne({
                where : {
                    email : email
                }
            })
            if (!cekData){
                return res.status(401).json({message : "Invalid email / Password"})
            }else {
                const isPassMatch = comparePassword(password, cekData.password)
                if (!isPassMatch) {
                    return res.status(401).json({message : "Invalid email / Password"})
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
            const {name, image_url, price, stock} = req.body
            let data = await product.create({
                name : name,
                image_url : image_url,
                price : price,
                stock : stock
            })
            return response(201, data, 'Insert product successfuly', res)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async getAll(req, res){
        try {
            let data = await product.findAll()
            return response(200, data, 'Get all products successfuly', res)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async delete(req, res){
        try {
            let data = await product.destroy({
                where : {
                    id : + req.params.id
                },
                force : true
            })
            return response (200, '', 'Success to delete',res)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async getById(req, res){
        try {
            let data = await product.findOne({
                where : {
                    id : + req.params.id
                }
            })
            return response (200, data, 'Get product successfuly',res)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async put(req, res){
        try {
            const {name, image_url, price, stock} = req.body
            let data = await product.update({name, image_url, price, stock}, {where : {
                id : req.params.id
            },returning : true})
            
            if (data[0] != 0){
                return response (200, data[1][0], 'Product success update',res)
            }else {
                return res.status(404).json({message : 'Product not found'})
            }
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

}

module.exports = adminController