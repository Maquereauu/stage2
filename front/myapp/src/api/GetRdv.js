export const GetRdv_ = async () => {
    const response = await fetch(
        'http://localhost:4444/rdv/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const RdvList = await response.json()
    return RdvList
}