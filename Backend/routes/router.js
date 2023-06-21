const express = require('express')
const jwt = require('jsonwebtoken');
const { Postmodel } = require('../modals/Post.modal');
const { validation } = require('../middleware/validation');

const route = express.Router();

route.use(validation)

route.get("/", async (req, res) => {
    try {

        let data = await Postmodel.find({user:req.body.user});
        res.status(200).send(data)

    } catch (error) {
        res.status(404).send(error)
    }
})

route.post("/", async (req, res) => {
    try {

        let data = await Postmodel.create(req.body);
        res.status(200).send({ "mag": "data succesfully created", "data": data })

    } catch (error) {
        res.status(404).send(error)
    }

})
route.patch("/:id",async(req,res)=>{
    console.log("yha aya");
    let id = req.params.id
    console.log(id)
    
    try {
        
        let data = await Postmodel.findByIdAndUpdate({_id:id},req.body);
        
        res.status(200).send(data)
        
    } catch (error) {
        res.status(404).send(error)

        
    }
})
route.delete("/:id",async(req,res)=>{
    let id = req.params.id
    
    
    try {
        
        let data = await Postmodel.findByIdAndDelete({_id:id});
        
        res.status(200).send(data)
        
    } catch (error) {
        res.status(404).send(error)

        
    }
})

module.exports = {
    route
}