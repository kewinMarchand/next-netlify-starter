function toCurrency(price) {
    const options = {style: "currency", currency: "EUR"}
    return price.toLocaleString("fr-FR", options)
}

function toDate(date) {
    const options = {}
    return new Date(date).toLocaleDateString('fr-FR', options)
}

export { toCurrency, toDate }