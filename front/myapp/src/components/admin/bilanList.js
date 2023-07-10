import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export function BilanList(props) {
    const [disabled,setDisabled]=useState(false);
    const [update,setUpdate]=useState(false);
    const yes = props.info.filter((info)=>info.id_patient === props.patientInfo.id && info.type == 4)
    const no = props.info2.filter((info2)=>info2.id_patient === props.patientInfo.id)
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
                <div>Groupe :{groupe}</div>
                <div onClick={()=>props.handleShowModalBilanGroupDelete()&props.setGroup(groupe)}>Supprimer</div>
                <div className='box2 background-color-1-5'>
                {newlist[groupe].map((Bilan, key) => {
                  if("image" in Bilan){
                    const getRef = ref(storage, 'gs://images-3e2d3.appspot.com/' + yes[key].image)
                    const url = getDownloadURL(getRef)
                  }
                  return (
                    <div key={key} className="box2 margin-top">
                      <div className="margin-bottom-- flex space-evenly">
                      </div>
                      <div className="background-color-2-3">
                        <div className="margin-bottom--- flex space-evenly">
                          {"image" in Bilan ? (<>
                            <img className="prod-img" src={imageUrls[key]} alt={Bilan.image} />
                            {ReactSession.set("photo"+Bilan.id, true)}
                            {ReactSession.remove("patient"+Bilan.id_patient, true)}
                            {ReactSession.remove("patient"+Bilan.id_patient+"bilan", true)}
                            {ReactSession.remove("notifpatient",true)}
                            {update?<><div onClick={()=>props.handleShowModalPhotosDelete()&props.setPhotosInfo(Bilan)}>Supprimer</div></>:<></>}
                            </>) : (
                            <>
                            {ReactSession.set("bilan"+Bilan.id, true)}
                            {ReactSession.set("bilan"+Bilan.id+Bilan.text+Bilan.weekly+Bilan.date+Bilan.date_fin+Bilan.shift,true)}
                            {ReactSession.remove("patient"+Bilan.id_patient, true)}
                            {ReactSession.remove("patient"+Bilan.id_patient+"bilan", true)}
                            {ReactSession.remove("notifpatient",true)}
                            <p className='bigger'>{Bilan.text}</p>
                            <p className='bigger'>{Bilan.date}</p>
                            {
                            (() => {
                              switch (Bilan.weekly) {
                                case 0:
                                  return <p className='bigger'>Récurrence: Aucune</p>;
                                case 1:
                                  return <p className='bigger'>Récurrence: Hebdomadaire</p>;
                                case 2:
                                  return <p className='bigger'>Récurrence: 15 jours</p>;
                                case 3:
                                  return <p className='bigger'>Récurrence: 1 mois</p>;
                                case 4:
                                  return <p className='bigger'>Récurrence: 2 mois</p>;
                                case 5:
                                  return <p className='bigger'>Récurrence: 3 mois</p>;
                              }
                            })()
                          }
                          {Bilan.weekly != 0?<><p className='bigger'>date début {Bilan.date_debut}</p><p className='bigger'>date fin {Bilan.date_fin}</p></>:<></>}
                          {update?<><div onClick={()=>props.handleShowModalBilanUpdate()&props.setBilanInfo(Bilan)}>Modifier</div><div onClick={()=>props.handleShowModalBilanDelete()&props.setBilanInfo(Bilan)}>Supprimer</div></>:<></>}
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
            <Button variant="secondary" disabled={disabled} onClick={() => { props.handleShowModalBilanInsert(); setDisabled(true); }}>
              Insérer un bilan
            </Button>
          </div>
        </>
      );
}

