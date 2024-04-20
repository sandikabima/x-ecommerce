const {user, product, cart} = require('../models')
const response = require('../helpers/respon')
const {comparePassword} = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class userController{
    static async postRegister (req,res){
        try {
            const {email, password} = req.body
            let cekData = await user.findOne({
                where : {
                    email : email
                }
            })
           if (cekData){
            return res.status(409).json({message : "Email is registered"})
           } else {
            let data = await user.create({
                email : email,
                password : password
            })
            return response(200, data, 'Registrasi successfully', res)
           }
        } catch (error) {
            return res.status(400).json({message : "Invalid Request"})
        }
    }

    static async postLogin(req, res){
        try {
            const {email, password} = req.body
            let data = await user.findOne({
                where : {
                    email
                }
            })
            if (!data){
                return res.status(401).json({message : 'Invalid password / email'})
            } else {
                const isPassMatch = comparePassword(password, data.password)
                if (!isPassMatch){
                    return res.status(401).json({message : 'Invalid password / email'})
                } else {
                    const token = generateToken ({
                        id : data.id,
                        email : data.email,
                        role : data.role
                    })
                    return res.status(200).json({access_token : token})
                }
            }
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async postCart(req, res){
        try {
            const {productId, quantity} = req.body
            let cekData = await cart.findOne({
                where : {
                    productId,
                    userId : req.loggedUser.id
                }, include : {
                    model : product
                }
            })
            if (cekData===null){
                let data = await cart.create({
                    productId,
                    userId : req.loggedUser.id,
                    quantity,
                })
                return response(200, data, 'add cart successfuly', res)
            } else {
                
                if (cekData.dataValues.Product.dataValues.stock > cekData.dataValues.quantity){
                   let data = await cart.update({quantity : cekData.dataValues.quantity + 1}, {
                    where : {
                        productId,
                        userId : req.loggedUser.id
                    }, returning : true
                   })
                   return response(200, data[1][0], 'add cart successfuly', res)
                } 
                else {
                   return res.status(400).json({message : 'Sorry Not Enaough Stock'})
                }
            }
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async getCart(req, res){
        try {
            let data = await cart.findAll()
            return response(200, data, 'Get cart successfuly', res)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async deleteCart(req, res){
        try {
            let data = await cart.destroy({
                where : {
                    id : req.params.id
                },
                force : true
            })
            return res.status(200).json({message : 'success to delete'})
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    static async patchCart(req, res){
        try {
            let {quantity} = req.body
            
            let data = await cart.update({
                quantity,
            }, {
                where : {
                    id : req.params.id
                } , returning : true
            })
            if (data[0]==1){
                return response(200, data[1][0], 'update cart success', res)
            }else{
                return res.status(404).json({message : 'cart not found'})
            }
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

}

module.exports = userController