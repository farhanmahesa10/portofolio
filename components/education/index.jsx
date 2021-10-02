import { Element } from "react-scroll";
import { useState, useEffect } from "react";
import OrganizationService from "../../services/organization-service";
import EducationService from "../../services/education-service";
const Education = () => {
  const [educations, setEducations] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    getEducation();
  }, []);
  useEffect(() => {
    getOrganization();
  }, []);
  const getEducation = async () => {
    const data = await EducationService.Get();
    setEducations(data.data);
  };

  const getOrganization = async () => {
    const data = await OrganizationService.Get();
    setOrganizations(data.data);
  };

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
              {educations.map((r, i) => {
                return (
                  <div key={i}>
                    <h1 className="text-xl font-semibold">{r.schoolName}</h1>
                    <h1> {r.schoolLevel}</h1>
                    <h1>{r.periode}</h1>
                    <br />
                  </div>
                );
              })}
            </div>
            <div>
              <h1 className="mb-8 font-bold text-4xl">Organization</h1>
              {organizations.map((r, i) => {
                return (
                  <div key={i}>
                    <h1 className="text-xl font-semibold">{r.name}</h1>
                    <h1>{r.periode}</h1>
                    <h1>{r.position} </h1>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
