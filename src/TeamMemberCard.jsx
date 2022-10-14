import React from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

export const TeamMemberCard = ({
  employee,
  handleEmployeeCardClick,
  selectTeam,
}) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employee.gender === "male" ? (
        <img src={maleProfile} className="card-img-top" alt="" />
      ) : (
        <img src={femaleProfile} className="card-img-top" alt="" />
      )}
      <div className="card-body">
        <h5 className="card-title">Full Name : {employee.fullName}</h5>
        <p className="card-text">Designation: {employee.designation} </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
