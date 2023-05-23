import { useForm } from "react-hook-form";
import { InsertTraitement_ } from "../../components/AllTraitement/Traitement";

export function TraitementInsert(props) {
    const { register, handleSubmit } = useForm();
    const onSubmitInsertTraitement = async (data) => {
        InsertTraitement_(data)
        window.location.replace('/patients');
    }
    return <form onSubmit={handleSubmit(onSubmitInsertTraitement)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Traitement</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("id")} type="hidden" id="id" />
                    <input className='background my-account- margin-top---' {...register("traitement")} placeholder="traitement" type="text" id="traitement" />
                </div>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Insérer le nouveau Traitement"/>
            </div>
        </div>
    </form>
}