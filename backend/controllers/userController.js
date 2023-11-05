const User = require('../models/userModel');



//register a user
exports.registerUser = async(req, res)=>{
    const { name, email, password,  } = req.body;

    const user = await User.create({
        name, email, password,
        avatar:{
            public_id:'sample public id',
            url:'profile picture'
        }
    })
    res.status(201).json({
        success:true,
        user
    });
}