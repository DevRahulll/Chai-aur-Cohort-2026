function prepareOrderCB(dish, cb) {
    setTimeout(() => cb(null, { dish, status: "prepared" }), 100);
}
function pickUpOrderCB(order, cb) {
    setTimeout(() => cb(null, { ...order, status: "Picked-Up" }), 100);
}
function deliverOrderCB(order, cb) {
    setTimeout(() => cb(null, { ...order, status: "delivered" }), 100);
}

prepareOrderCB("Biryani", (err, order) => {
    if (err) return console.log(err);
    pickUpOrderCB(order, (err, order) => {
        if (err) return console.log(err);
        deliverOrderCB(order, (err, order) => {
            if (err) return console.log(err);
            console.log(`${order.dish}: ${order.status}`)
        })
    })
})