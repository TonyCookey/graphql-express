const Product = require('./products.model')

module.exports = {
    Query: {
        products: Product.getAllProducts,
        productsByPrice: (_, args) => {
            return Product.getProductsByPrice(args.min, args.max)
        },
        productByID: (_, args) => {
            return Product.getProductByID(args.id)
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return Product.addNewProduct(args.id, args.description, args.price)
        },
        addNewProductReview: (_, args) => {
            return Product.addNewProductReview(args.product_id, args.rating, args.comment)
        }
    }
}
