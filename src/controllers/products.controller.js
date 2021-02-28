import Product from '../models/Product';


export const createProduct  = async (req, res) => {

    const { name, category, price, imgURL } = req.body;

    const productToCreate = new Product({name, category, price, imgURL});

    const productSave = await productToCreate.save();

    res.status(201).json(productSave);
}

export const getProducts = (req, res) => {
    res.json('GET! ALL');
}


export const getProductById = (req, res) => {
    res.json('get Product');
}


export const updateProductById = (req, res) => {
    res.json('UPDATE');
}


export const deleteProductById = (req, res) => {
    res.json('DELETE');
}