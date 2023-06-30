export const GetTraitement_ = async () => {
    const response = await fetch(
        'http://stage-dun.vercel.app/traitement/list', {
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