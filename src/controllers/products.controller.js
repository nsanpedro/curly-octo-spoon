export const createProduct  = (req, res) => {
    res.json('create!');
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