import Image from "next/image";
import { useState, useEffect } from "react";
import HelloService from "../../services/hello-service";

const Profile = () => {
  const [profession, setProfession] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getHello();
  }, []);

  const getHello = async () => {
    const data = await HelloService.Get();
    setProfession(data.data.profession);
    setAbout(data.data.about);
    setImage(
      data.data.image ? process.env.BASE_API_ROUTE + "/" + data.data.image : ""
    );
  };
  return (
    <div className="lg:flex lg:items-center lg:h-screen border-b" id="hello">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  ">
        <div className=" flex justify-center ">
          <div className="lg:mx-7">
            <img
              src={image}
              alt="me"
              width="600"
              height="600"
              className=" lg:rounded-md lg:shadow-2xl   "
            />
          </div>
        </div>
        <div
          className="flex px-7  w-full items-center absolute lg:static  bg-gray-100 bg-opacity-50 lg:bg-opacity-0"
          style={{ height: "600px" }}
        >
          <div className=" w-full  rounded-md px-4 ">
            <h3 className="font-semibold text-left">HELLO THERE,</h3>
            <h1 className="text-left text-4xl font-semibold">
              I Am {profession}
            </h1>
            <h1>{about}</h1>

            {/* <table className="mt-2">
            <tr className="font-semibold">
              <td className="w-32 py-1">NAME</td>
              <td>:</td>
              <td>M FARHAN</td>
            </tr>
            <tr className="font-semibold">
              <td className="w-32 py-1">GENDER</td>
              <td>:</td>
              <td>Male</td>
            </tr>
            <tr className="font-semibold">
              <td className="w-32 py-1">DATE OF BIRTH</td>
              <td>:</td>
              <td>Sukabumi, 03 Juni 1997</td>
            </tr>
            <tr className="font-semibold">
              <td className="w-32 py-1">RELIGION</td>
              <td>:</td>
              <td>Islam</td>
            </tr>
            <tr className="font-semibold">
              <td className="w-32 py-1">CITIZENSHIP</td>
              <td>:</td>
              <td>Indonesia</td>
            </tr>
            <tr className="font-semibold">
              <td className="w-32 py-1align-top">ADDRESS</td>
              <td className="align-top">:</td>
              <td>
                Jl. karamat RT/RW. 004/004, Kel. Karamat, Kec. Gunung Puyuh,
                Kota Sukabumi, Jawa Barat
              </td>
            </tr>
          </table> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
