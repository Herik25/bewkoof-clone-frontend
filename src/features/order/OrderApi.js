export function createOrder(order) {
    return new Promise(async(resolve) => {
        const response = await fetch('/orders', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {'content-type': 'application/json'}
        })
        const data = await response.json()
        resolve({ data })
    })
}

export function removeOrder(orderId) {
    return new Promise(async(resolve) => {
        const response = await fetch('/orders/'+orderId, {
            method: 'DELETE',
            headers: {'content-type': 'application/json'}
        })
        const data = await response.json()
        resolve({ data: { id: orderId } })
    })
}