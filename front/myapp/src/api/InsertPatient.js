export const InsertPatient = async (patient) => {
    const response = await fetch(
        'https://stage2-backend.vercel.app/patient/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(patient)
        }
    )
    const PatientList = await response.json()
    return PatientList
}