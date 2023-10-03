const categoryModel = require('../model/category')({})
const productModel = require('../model/products')({})
module.exports=(router, expressApp) =>{
    
    router.post('/category/getall', categoryModel.getCategories)
    router.post('/category/getbyid', categoryModel.getCategoryById)
    router.post('/category/save', categoryModel.saveCategory)
    router.post('/category/update', categoryModel.updateCategory)
    router.post('/category/delete', categoryModel.deleteCategory)

    
    router.get('/products/getall', productModel.getProducts)
    router.post('/products/getbyid', productModel.getProductById)
    router.post('/products/getbycid', productModel.getProductByCategoryId)
    router.post('/products/save', productModel.saveProduct)
    router.post('/products/update', productModel.updateProduct)
    router.post('/products/delete', productModel.deleteProduct)

    
    return router;
}










