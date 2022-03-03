import React from "react";

const Navbar = () => {
  var name = "keerthi Raman";
  const ProfilePic = (name) => {
    var FirstLetter = name.match(/\b(\w)/g); // returns an array of first letter of each word
    var Profile = FirstLetter.join(""); // joins each letter in an array to form a single word
    return Profile.toUpperCase()
    // console.log(Profile);
  };
  return (
    <>
      <div className="navbar justify-content-end p-2 border-bottom" style={{height: "9vh"}}>
        <div className="row w-50 align-items-center justify-content-end">
          <p className="w-auto text-center">
            Welcome <span className="text-uppercase" style={{color: "var(--primary)"}}>{name}</span>
          </p>
          <div className="w-auto text-center ml-2">
            <div className="profile_img">{ProfilePic(name)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
