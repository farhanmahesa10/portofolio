import { useState, useEffect } from "react";

import MainAdminLayout from "../../components/layouts/admin/main-admin-layout"
import InputText from "../../components/materials/form-input/input-text";
import InputImage from "../../components/materials/form-input/input-image";
import Textarea from "../../components/materials/form-input/textarea";

const Admin = () => {
    const [profession, setProfession] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    return (
        <MainAdminLayout title="MANAGE HELLO PAGE">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center my-10">
                <div className="">
                    <div className="mx-10 text-center">
                        <InputImage label="Foto" />
                    </div>
                </div>
                <div className=" ml-10 mr-10 ">
                    <div className=" text-right">
                        <button
                            onClick={() => setIsEditing(true)}
                            className={`${isEditing ? 'hidden' : ''} bg-primary px-2 py-1 hover:bg-yellow-500 text-white rounded-md`}><i className="fa fa-pencil"></i> Edit</button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className={`${!isEditing ? 'hidden' : ''} bg-green-500 px-2 py-1 hover:bg-green-400 text-white rounded-md`}>
                            <i className="fa fa-check"></i> Save
                        </button>
                    </div>
                    <div className={isEditing ? 'hidden' : ''}>
                        <h3 className="font-semibold text-left">HELLO THERE,</h3>
                        <h1 className="text-left text-4xl font-semibold">
                            I Am Web Developer
                        </h1>
                        <h1>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
                            libero magni obcaecati dignissimos id illum quod praesentium
                            ducimus alias quo a quos ipsa repudiandae nisi laudantium
                            voluptas.
                        </h1>
                    </div>
                    <div className={!isEditing ? 'hidden' : ''}>
                        <InputText value={profession} valueChange={(value) => setProfession(value)} label="Profession" />
                        <Textarea value={aboutMe} label="About Me" valueChange={(value) => setAboutMe(value)} />
                    </div>
                </div>

            </div>
        </MainAdminLayout>
    )
}
export default Admin;