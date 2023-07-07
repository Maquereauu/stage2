import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export function PhotosList(props) {
    const [disabled,setDisabled]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 1)
    const storage = getStorage();
    const [imageUrls, setImageUrls] = useState([]);
    useEffect(() => {
        const fetchImageUrls = async () => {
          const urls = await Promise.all(yes.map(async (Photos) => {
            const imageRef = ref(storage, 'gs://images-3e2d3.appspot.com/' + Photos.image);
            const url = await getDownloadURL(imageRef);
            return url;
          }));
    
          setImageUrls(urls);
        };
    
        fetchImageUrls();
      }, []);
    
    return <>{yes.map((Photos,key)=>{
        ReactSession.set("photo"+Photos.id, true)
        ReactSession.remove("patient"+Photos.id_patient, true)
        ReactSession.remove("patient"+Photos.id_patient+"photo", true)
        ReactSession.remove("notifpatient",true)
        const ref = ref(storage, 'gs://images-3e2d3.appspot.com/' + yes[key].image)
        const url = getDownloadURL(ref)
        return <div key={key} className="box2 margin-top">
            <div className="margin-bottom-- flex space-evenly">
            <div onClick={()=>props.handleShowModalPhotosDelete()&props.setPhotosInfo(Photos)}>Supprimer</div>
            {/* <div onClick={()=>props.handleShowModalPhotosUpdate()&props.setPhotosInfo(Photos)}>Modifier</div> */}
            </div>
            <div className="background-color-2-3">
                <div className="margin-bottom--- flex space-evenly">
                    <img className="prod-img"src={imageUrls[key]}></img>
            </div>
            </div>
            </div>})}
        <div className='flex2 space-around'>
        <Button variant="secondary" disabled={disabled} onClick={()=>{props.handleShowModalPhotosInsert();setDisabled(true);}}>Insérer une ordonnance</Button>
        </div>
        </>
}