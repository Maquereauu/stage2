export function TraitementList(props) {
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id)
    return yes.map((traitement,key)=>{
        return <div key={key}>
            <p>{traitement.traitement}</p>
            </div>})
}