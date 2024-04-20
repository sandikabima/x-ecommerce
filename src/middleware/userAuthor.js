const userAuthor = ((req, res, next) => {
    req.loggedUser.role === 'costumer' ? next() : res.status(400).json({messagge : 'Invalid JWT'})
})



module.exports = {userAuthor}