import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export function PlaiesList(props) {
    const [disabled,setDisabled]=useState(false);
    const [update,setUpdate]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 2)
    const no = props.info2.filter((info2)=>info2.id_patient === props.patientInfo.id && info2.type == 1)
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
                <div>Groupe {groupe}</div>
                <div onClick={()=>props.handleShowModalPlaiesGroupDelete()&props.setGroup(groupe)}>Supprimer</div>
                <div className='box2 background-color-1-5'>
                {newlist[groupe].map((Plaies, key) => {
                  if("image" in Plaies){
                    const getRef = ref(storage, 'gs://images-3e2d3.appspot.com/' + yes[key].image)
                    const url = getDownloadURL(getRef)
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
                            {ReactSession.remove("patient"+Plaies.id_patient+"plaies", true)}
                            {ReactSession.remove("notifpatient",true)}
                            {update?<><div onClick={()=>props.handleShowModalPhotosDelete()&props.setPhotosInfo(Plaies)}>Supprimer</div></>:<></>}
                            </>) : (
                            <>
                            {ReactSession.set("plaies"+Plaies.id, true)}
                            {ReactSession.set("plaies"+Plaies.id+Plaies.text, true)}
                            {ReactSession.remove("patient"+Plaies.id_patient, true)}
                            {ReactSession.remove("patient"+Plaies.id_patient+"plaies", true)}
                            {ReactSession.remove("notifpatient",true)}
                            <p className='bigger'>{Plaies.text}</p>
                            {update?<><div onClick={()=>props.handleShowModalPlaiesUpdate()&props.setPlaiesInfo(Plaies)}>Modifier</div><div onClick={()=>props.handleShowModalPlaiesDelete()&props.setPlaiesInfo(Plaies)}>Supprimer</div></>:<></>}
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
            <Button variant="secondary" disabled={disabled} onClick={() => { props.handleShowModalPlaiesInsert(); setDisabled(true); }}>
              Insérer des infos sur une plaie
            </Button>
          </div>
        </>
      );
}

