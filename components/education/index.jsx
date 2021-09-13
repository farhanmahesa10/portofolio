import { Element } from "react-scroll";
const Education = () => {
  return (
    <div id="education" className="pb-24 img-gradient">
      <h1>&nbsp;</h1>
      <h2 className="text-center mt-28  text-xl ">
        <span className="border-b-4 border-gray-700 pb-4 ">
          &nbsp;&nbsp;EDUCATION&nbsp;&nbsp;
        </span>
      </h2>

      <div className="flex justify-center">
        <div className="max-w-7xl px-9 flex justify-center">
          <div className="grid md:grid-cols-2 mt-10 gap-10">
            <div className="">
              <h1 className="mb-8 font-bold text-4xl">Education</h1>
              <div>
                <h1 className="text-xl font-semibold">
                  DIPLOMA 3 TEKNIK KOMPUTER
                </h1>
                <h1>POLITEKNIK SUKABUMI</h1>
                <h1>2020-2021</h1>
              </div>
              <br />
              <div>
                <h1 className="text-xl font-semibold">SMA</h1>
                <h1>SMA NEGERI 2 KOTA SUKABUMI</h1>
                <h1>2020-2021</h1>
              </div>
              <br />
              <div>
                <h1 className="text-xl font-semibold">SMP</h1>
                <h1>SMP ISLAM NURUL KAROMAH</h1>
                <h1>2020-2021</h1>
              </div>
              <br />
              <div>
                <h1 className="text-xl font-semibold">SD</h1>
                <h1>SD NEGERI KARAMAT RANDU</h1>
                <h1>2020-2021</h1>
              </div>
            </div>
            <div>
              <h1 className="mb-8 font-bold text-4xl">Organization</h1>
              <div>
                <h1 className="text-xl font-semibold">
                  Himpunan Mahasiswa Teknik Komputer
                </h1>
                <h1>2020-2021</h1>
                <h1>Koordinator Department Pendidikan </h1>
              </div>
              <br />
              <div>
                <h1 className="text-xl font-semibold">
                  Himpunan Mahasiswa Teknik Komputer
                </h1>
                <h1>2020-2021</h1>
                <h1>Anggota Himpunan Mahasiswa Teknik Komputer </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
