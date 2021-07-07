const express=require('express')
const route = express.Router()
const checkRegistration=require('../../middlewares/authentication/registration.middleware')
const {confirmRegistration,sendData}=require('../../controllers/AuthenticationController/registration.controller')

// route.get('/',(req, res)=>{
//     res.send('Registration Successfully completed')
// })
route.post('/', (req, res) => {
    const signedUpUser = new sendData({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        phone:req.body.phone
    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})

module.exports=route