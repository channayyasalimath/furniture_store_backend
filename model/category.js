
const backend= require("../backend/category")({})
module.exports= (props) =>{
    return {
        getCategories,
        getCategoryById,
        saveCategory,
        updateCategory,
        deleteCategory
    }
}


function getCategories(req, res){
    let payload= req.body;
    console.log(payload);
    backend.getCategories(payload, function(options){
        res.send(options)
    })
}

function getCategoryById(req, res){
    let requestPayload= req.body
    let payload= {
        id:requestPayload.id
    }
    backend.getCategoryById(payload, function(options){
        res.send(options)
    })
}

function saveCategory(req, res){
    let rqPayload=req.body
    let payload= rqPayload
    backend.saveCategory(payload, function(options){
        res.send(options)
    })
}

function updateCategory(req, res){
    let rqPayload=req.body
    let payload= rqPayload
    backend.updateCategory(payload, function(options){
        res.send(options)
    })
}

function deleteCategory(req, res){
    let rqPayload=req.body
    let payload= rqPayload
    backend.deleteCategory(payload, function(options){
        res.send(options)
    })
}