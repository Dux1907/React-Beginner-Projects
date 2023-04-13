import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
  let { fname, lname } = useParams();
  const location = useLocation();
  const history = useNavigate();

  console.log(location);
  //console.log(`this is ${fname}  page`)
  return (
    <>
      <h1>
        This is {fname} {lname}'s page
      </h1>
      {location.pathname === "/kartik/madaan" ? (
        <>
          <button onClick={() => alert("just for fun")}>Click Me</button>
          <button onClick={() => history("-1")}>Go Home</button>
        </>
      ) : null}
    </>
  );
};

export default User;
