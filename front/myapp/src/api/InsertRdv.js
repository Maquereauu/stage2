export const InsertRdv = async (Rdv) => {
    const response = await fetch(
        'http://stage-dun.vercel.app/rdv/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(Rdv)
        }
    )
    const RdvList = await response.json()
    return RdvList
}