/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // creating user  
  createUser: async function(req, res){
    res.set('Access-Control-Allow-Origin', "http://localhost:8080")
    const params = req.allParams()
    if(!params) return res.badRequest({err: 'No data is sent'})

    // creating new user
    const userExist = await User.find({
      email: params.email
    })
    if(!userExist.length){
      await User.create({
          fullname: params.fullname,
          email: params.email,
          password: params.password,
      }, (err, result) => {
          if(err) return res.serverError(err)
          return res.ok(result)
      })
    }
     else return res.badRequest({err: 'Email already exist'}) 
  },
  // login
  login: async function(req, res){
    res.set('Access-Control-Allow-Origin', "http://localhost:8080")
    const params = req.allParams()
    if(!params) return res.badRequest({err: 'No data is sent'})

    // email and password matching
    try {
        const user = await User.findOne({
            email: params.email
        })
        // check if user exists
        if(!user) return res.badRequest({err: 'Wrong email or password'})

        // match the password
        if(user.password == params.password) return res.ok({success: true, 'user': user})
        return res.badRequest({err: 'Wrong email or password'})
        
    } catch (error) {
        return res.badRequest({err: error})
    }
  }

};

