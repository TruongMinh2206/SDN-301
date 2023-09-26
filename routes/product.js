import express from 'express'
// import productController from '../controllers/productController.js'

const productRouter = express.Router()
let products =[]

// Activities -> User object
productRouter.get('/', (req, res)=>{
    // productController.getAllProducts(req, res)
    res.send('getAllProducts')
})

productRouter.get('/:id', async(req, res)=>{
   
    res.send("Get product by Id")
})
productRouter.post('/posts', async(req, res)=>{
    
    res.send(req.body)
})

productRouter.get('/search/:id', async(req, res)=>{
    let id = req.params.id
    let product = products.find(product => product.id === id)
    res.send(products)
})

productRouter.delete('/delete/:id', async(req, res)=>{
    let {id} = req.params;
    let product = products.filter(product => product.id != id);
    res.send(products)

})

productRouter.patch('/edit/:id', async(req, res)=>{
    let {title, desc} = req.body;
    let product = products.find(product => product.id === id)

    if(name){
        product.name = name;
    }
    if(quantity){
        product.quantity = quantity;
    }
    res.send(post)

})

productRouter.post('/create', async(req, res)=>{
    res.send("Create a new Product")
})

export default productRouter