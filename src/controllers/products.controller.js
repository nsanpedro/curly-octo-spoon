import Product from '../models/Product';


export const createProduct  = async (req, res) => {

    const { name, category, price, imgURL } = req.body;

    const productToCreate = new Product({name, category, price, imgURL});

    const productSave = await productToCreate.save();

    res.status(201).json(productSave);
}

export const getProducts = async (req, res) => {
   const products = await Product.find();
   res.status(200).json(products); 
}


export const getProductById = async (req, res) => {
    const { productID } = req.params;
    const productByID = await Product.findById(productID)
    res.status(200).json(productByID);
}


export const updateProductById = async (req, res) => {
    res.json('UPDATE');
}


export const deleteProductById = async (req, res) => {
    res.json('DELETE');
}