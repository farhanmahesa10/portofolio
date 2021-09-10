import Image from "next/image";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <div className="mt-16">
        <Image
          src="/images/me.jpg"
          alt="me"
          width="400"
          height="400"
          className=" border-2 border-gray-300 rounded-full  "
        />
      </div>
      <div className="flex   w-full items-center ">
        <div className=" w-full bg-white rounded-md px-4 ">
          <h3 className="font-semibold text-left">HELLO THERE,</h3>
          <h1 className="text-left text-4xl font-semibold">
            I Am Web Developer
          </h1>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            libero magni obcaecati dignissimos id illum quod praesentium ducimus
            alias quo a quos ipsa repudiandae nisi laudantium voluptas.
          </h1>

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
  );
};
export default Profile;
