import { useState, useEffect } from "react";

import MainAdminLayout from "../../components/layouts/admin/main-admin-layout"
import InputText from "../../components/materials/form-input/input-text";
import InputImage from "../../components/materials/form-input/input-image";
import Textarea from "../../components/materials/form-input/textarea";
import HelloService from "../../services/hello-service";
const Admin = () => {
    const [profession, setProfession] = useState("");
    const [about, setAbout] = useState("");
    const [image, setImage] = useState("")
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        getHello();
    }, [])

    const handleUpdate = async () => {
        const data = await HelloService.Save({ profession, about });
        getHello();
        setIsEditing(false)
    }

    const getHello = async () => {
        const data = await HelloService.Get();
        setProfession(data.data.profession);
        setAbout(data.data.about);
        setImage(data.data.image ? process.env.BASE_API_ROUTE + '/' + data.data.image : '');
    }

    const handleFileChange = async (e) => {
        let request = new FormData();
        request.append('image', e.target.files[0]);
        await HelloService.ChangeImage(request);
    }
    return (
        <MainAdminLayout title="MANAGE HELLO PAGE">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center my-10">
                <div className="">
                    <div className="mx-10 text-center">
                        <InputImage label="Foto" onFileChange={handleFileChange} image={image} />
                    </div>
                </div>
                <div className=" ml-10 mr-10 ">
                    <div className=" text-right">
                        <button
                            onClick={() => setIsEditing(true)}
                            className={`${isEditing ? 'hidden' : ''} bg-primary px-2 py-1 hover:bg-yellow-500 text-white rounded-md`}><i className="fa fa-pencil"></i> Edit</button>
                        <button
                            onClick={handleUpdate}
                            className={`${!isEditing ? 'hidden' : ''} bg-green-500 px-2 py-1 hover:bg-green-400 text-white rounded-md`}>
                            <i className="fa fa-check"></i> Update
                        </button>
                    </div>
                    <div className={isEditing ? 'hidden' : ''}>
                        <h3 className="font-semibold text-left">HELLO THERE,</h3>
                        <h1 className="text-left text-4xl font-semibold">
                            I Am {profession}
                        </h1>
                        <h1>
                            {about}
                        </h1>
                    </div>
                    <div className={!isEditing ? 'hidden' : ''}>
                        <InputText value={profession} valueChange={(value) => setProfession(value)} label="Profession" />
                        <Textarea value={about} label="About Me" valueChange={(value) => setAbout(value)} />
                    </div>
                </div>

            </div>
        </MainAdminLayout>
    )
}
export default Admin;