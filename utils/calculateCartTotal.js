function calculateCartTotal(products) {
    const total = products.reduce((acc, p) => {
        acc += p.quantity * p.product.price;
        return acc;
    }, 0)
    const cartTotal = total.toFixed(2);
    const stripeTotal = Number((total * 100).toFixed(2))

    return { cartTotal, stripeTotal }
}

export default calculateCartTotal;