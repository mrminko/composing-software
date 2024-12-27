let originalCart = {
    items: []
}

const addToCart = (cart, item, quantity) => {
    cart.items.push({
        item,
        quantity
    });
    return cart;
}

const addToCart2 = (cart, item, quantity) => {
    return {
        ...cart,
        items: cart.items.concat([{
            item,
            quantity
        }])
    }
}

let newCart = addToCart2(originalCart, {
    "name": "iPad",
    "price": 1000
}, 1)
console.log("original cart: \n", JSON.stringify(originalCart, undefined, 1));
