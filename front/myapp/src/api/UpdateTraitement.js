export const UpdateTraitement = async (Traitement) => {
    const response = await fetch(
        'https://stage-dun.vercel.app/traitement/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(Traitement)
        }
    )
    const TraitementList = await response.json()
    return TraitementList
}