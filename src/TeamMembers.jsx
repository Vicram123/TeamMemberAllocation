import React from "react";
import TeamMemberCard from "./TeamMemberCard";
export const TeamMembers = ({
  employees,
  handleEmployeeCardClick,
  selectTeam,
}) => {
  return employees.map((employee) => (
    <TeamMemberCard
      employee={employee}
      handleEmployeeCardClick={handleEmployeeCardClick}
      selectTeam={selectTeam}
    />
  ));
};

export default TeamMembers;
