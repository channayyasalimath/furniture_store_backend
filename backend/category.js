
const db= require('../mysql')
module.exports=(props) =>{
    console.log(props.name)
    return{
        getCategories,
        getCategoryById,
        saveCategory,
        updateCategory,
        deleteCategory

    }
}

function getCategories(payload, callback){
    let sqlStmt =`Select * from category`
    db.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}

function getCategoryById(payload, callback){
    let sqlStmt =`Select * from category where id= "${payload.id}"`
    db.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}

function saveCategory(payload, callback){
    let sqlStmt =`INSERT INTO category(name, narration) VALUES("${payload.categoryName}", "${payload.narration}")`
    db.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}

function updateCategory(payload, callback){
    let sqlStmt =`UPDATE category SET name="${payload.categoryName}", narration="${payload.narration}", updated_at= now() where id= "${payload.id}"`
    console.log(sqlStmt)

    db.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}

function deleteCategory(payload, callback){
    let sqlStmt =`DELETE from category where id= "${payload.id}"`
    console.log(sqlStmt)

    db.query(sqlStmt, function(err, response){
        if(!err){
            let options= {status:200, err:null, response:response}
            callback(options)
        }else{
            let options= {status:500, err:err, response:null}
            callback(options)
        }
    })
}