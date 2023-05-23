export const GetTraitement_ = async () => {
    const response = await fetch(
        'http://localhost:4444/traitement/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const TraitementList = await response.json()
    return TraitementList
}