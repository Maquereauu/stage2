export const InsertProduct = async () => {
    const response = await fetch(
        'http://localhost:4444/patient/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const ProductList = await response.json()
    return ProductList
}