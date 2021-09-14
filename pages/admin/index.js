import { useState, useEffect } from "react";

import MainAdminLayout from "../../components/layouts/admin/main-admin-layout"
import InputText from "../../components/materials/form-input/input-text";
import InputImage from "../../components/materials/form-input/input-image";
import Textarea from "../../components/materials/form-input/textarea";

const Admin = () => {
    const [profession, setProfession] = useState("");
    const [aboutMe, setAboutMe] = useState("");


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
                        <button className="bg-primary px-2 py-1 hover:bg-yellow-500 text-white rounded-md"><i className="fa fa-pencil"></i> Edit</button>
                    </div>
                    <InputText value={profession} valueChange={(value) => setProfession(value)} label="Profession" />
                    <Textarea value={aboutMe} label="About Me" valueChange={(value) => setAboutMe(value)} />

                </div>

            </div>
        </MainAdminLayout>
    )
}
export default Admin;