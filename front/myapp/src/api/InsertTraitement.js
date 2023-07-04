export const InsertTraitement = async (traitement) => {
    const response = await fetch(
        'http://localhost:4444/traitement/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(traitement)
        }
    )
    const TraitementList = await response.json()
    return TraitementList
}