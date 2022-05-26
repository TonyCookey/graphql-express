const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
        reviews: []

    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55.55,
        reviews: []

    },
    {
        id: 'greenjoggers',
        description: 'Green Joggers',
        price: 55.55,
        reviews: []

    }
]

function getAllProducts() {
    return products
}
function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    })
}

function getProductByID(id) {
    return products.find(product => product.id == id)
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    }
    products.push(newProduct)
    return newProduct
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductByID,
    addNewProduct
}
