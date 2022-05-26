const Orders = require('./orders.model')

module.exports = {
    Query: {
        orders: Orders.getAllOrders
    }
}
