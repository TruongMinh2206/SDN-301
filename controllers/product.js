import express from 'express'
import Product from '../models/productModel.js'

const product = {
    // Function defined
    getAllProducts: async (req, res) => {
        const p = new Product({
            name: "Product 1",
            quatity: 10,
            price: 20.5,
            image: 'logo.png'
        }
        )
        const p1 = new Product({
            name: "Product 2",
            quatity: 15,
            price: 10.5,
            image: 'p2.png'
        }
        )

        const list = [p]
        list.push(p1)

        res.status(200).json(list)
    }
}

export default product