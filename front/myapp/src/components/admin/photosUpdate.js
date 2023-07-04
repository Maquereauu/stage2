import { useForm } from "react-hook-form";
import { UpdatePhotos_ } from "../../components/AllPhotos/Photos";
export function PhotosUpdate(props) {
    const { register, handleSubmit } = useForm();
    const onSubmitUpdatePhotos = async (data) => {
        await UpdatePhotos_(data)
        window.location.replace('/patients');
    }
    return <form onSubmit={handleSubmit(onSubmitUpdatePhotos)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Photos</h1>
        <div className="flex2 vertical center">
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <div className="flex gap">
                    <input type="hidden" {...register("id")} id="id" defaultValue={props.photosInfo.id}/>
                    <input className='background my-account- margin-top--- margin-right--' {...register("image")} defaultValue={props.photosInfo.image} placeholder="image" type="file" id="image" />
                </div>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier le Photos"/>
            </div>
        </div>
    </form>
}