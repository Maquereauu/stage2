export const DeleteRdv = async (Rdv) => {
    const response = await fetch(
        'http://localhost:4444/rdv/delete', {
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