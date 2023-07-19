export const GetRdv_ = async () => {
    const response = await fetch(
        'https://stage2-backend.vercel.app/rdv/list', {
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