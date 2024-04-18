const adminAuthor = ((req, res, next)=>{
    req.loggedUser.role === 'admin' ? next() : res.status(400).json({messagge : 'Invalid JWT'})
})

module.exports = adminAuthor