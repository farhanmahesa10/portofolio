import { useState, useEffect } from "react";

import MainAdminLayout from "../../../components/layouts/admin/main-admin-layout";
import AdminEducation from "../../../components/education/admin-education";
import AdminOrganization from "../../../components/education/admin-organization";
const Education = () => {
  const educationStore = request => {};
  const educationUpdate = request => {
    console.log(request);
  };
  const organizationStore = request => {
    console.log(request);
  };
  const organizationUpdate = request => {
    console.log(request);
  };
  return (
    <MainAdminLayout title="MANAGE EDUCATION">
      <div className="flex justify-center">
        <div className="max-w-7xl lg:px-9 flex justify-center"></div>
        <div className="grid lg:grid-cols-2  gap-10 -mx-2 -mb-2 p-4">
          <AdminEducation onStore={educationStore} onUpdate={educationUpdate} />
          <AdminOrganization
            onStore={organizationStore}
            onUpdate={organizationUpdate}
          />
        </div>
      </div>
    </MainAdminLayout>
  );
};

export default Education;
