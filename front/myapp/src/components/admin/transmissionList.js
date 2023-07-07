import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export function TransmissionList(props) {
    const [disabled,setDisabled]=useState(false);
    const [update,setUpdate]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 5)
    const no = props.info2.filter((info2)=>info2.id_patient === props.patientInfo.id && info2.type == 3)
    const list = [...yes,...no]
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
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
    const newlist = groupBy(list, 'groupe')
    return (
        <><div onClick={()=>update?setUpdate(false):setUpdate(true)}>Modifier</div>
          {Object.keys(newlist).map((groupe) => {
            return (
              <>
                <div>Groupe{groupe}</div>
                <div onClick={()=>props.handleShowModalTransmissionGroupDelete()&props.setGroup(groupe)}>Supprimer</div>
                <div className='box2 background-color-1-5'>
                {newlist[groupe].map((Plaies, key) => {
                   if("image" in Bilan){
                    const ref = ref(storage, 'gs://images-3e2d3.appspot.com/' + yes[key].image)
                    const url = getDownloadURL(ref)
                  }
                  return (
                    <div key={key} className="box2 margin-top">
                      <div className="margin-bottom-- flex space-evenly">
                      </div>
                      <div className="background-color-2-3">
                        <div className="margin-bottom--- flex space-evenly">
                          {"image" in Plaies ? (
                            <>
                            <img className="prod-img" src={imageUrls[key]} alt={Plaies.image} />
                            {ReactSession.set("photo"+Plaies.id, true)}
                            {ReactSession.remove("patient"+Plaies.id_patient, true)}
                            {ReactSession.remove("patient"+Plaies.id_patient+"transmission", true)}
                            {ReactSession.remove("notifpatient",true)}
                            {update?<><div onClick={()=>props.handleShowModalPhotosDelete()&props.setPhotosInfo(Plaies)}>Supprimer</div></>:<></>}
                            </>) : (
                            <>
                            {ReactSession.set("transmission"+Plaies.id, true)}
                            {ReactSession.set("transmission"+Plaies.id+Plaies.text,true)}
                            {ReactSession.remove("patient"+Plaies.id_patient, true)}
                            {ReactSession.remove("patient"+Plaies.id_patient+"transmission", true)}
                            {ReactSession.remove("notifpatient",true)}
                            <p>{Plaies.text}</p>
                            {update?<><div onClick={()=>props.handleShowModalTransmissionUpdate()&props.setPlaiesInfo(Plaies)}>Modifier</div><div onClick={()=>props.handleShowModalTransmissionDelete()&props.setPlaiesInfo(Plaies)}>Supprimer</div></>:<></>}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}</div>
              </>
            );
          })}
          <div className="flex2 space-around">
            <Button variant="secondary" disabled={disabled} onClick={() => { props.handleShowModalTransmissionInsert(); setDisabled(true); }}>
              Insérer des infos sur une transmission
            </Button>
          </div>
        </>
      );
}

