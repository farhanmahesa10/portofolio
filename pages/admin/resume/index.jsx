import { useState, useEffect } from "react";

import MainAdminLayout from "../../../components/layouts/admin/main-admin-layout";
import AdminWorkSkill from "../../../components/resume/admin-work-skill";
import AdminExperience from "../../../components/resume/admin-experience";
const Resume = () => {
  const workSkillStore = request => {
    console.log(request);
  };
  const handleEdit = () => {
    setWorkSkillEditingToggle(true);
  };

  const handleExperienceStore = request => {
    console.log(request);
  };
  const handleExperienceUpdate = request => {
    console.log(request);
  };
  return (
    <MainAdminLayout title="MANAGE RESUME">
      <div className="grid lg:grid-cols-2 lg:gap-10  -mx-2 -mb-2 p-4">
        <AdminExperience
          onStore={request => handleExperienceStore(request)}
          onUpdate={request => handleExperienceUpdate(request)}
        />
        <AdminWorkSkill onStore={request => workSkillStore(request)} />
      </div>
    </MainAdminLayout>
  );
};

export default Resume;
