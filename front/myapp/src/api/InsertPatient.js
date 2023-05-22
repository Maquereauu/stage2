export const InsertPatient = async () => {
    const response = await fetch(
        'http://localhost:4444/patient/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const PatientList = await response.json()
    return PatientList
}