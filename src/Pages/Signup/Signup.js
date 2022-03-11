import { useState, useContext } from "react";
import AuthContext from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebase";
import Loader from "../../loader/Loader";
import { setDoc, doc } from "firebase/firestore";
import { setUserId } from "firebase/analytics";
const Signup = (props) => {
  const ctx = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [uid, setUid] = useState();
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
    schoolname: "",
    phoneno: "",
  });
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const titleCase = (str) => {
    return str
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const userId = auth.currentUser;
  const handleSignup = async (e) => {
    e.preventDefault();
    if (userCred.email === "") {
      setError("Enter Email");
    } else if (userCred.password === "") {
      setError("Enter Password");
    } else if (userCred.password !== userCred.confirmpassword) {
      setError("password and confirm password not match");
    } else if (
      userCred.username === "" ||
      userCred.schoolname === "" ||
      userCred.phoneno === ""
    ) {
      setError("please enter the remaining fields");
    } else {
      createUserWithEmailAndPassword(auth, userCred.email, userCred.password)
        .then((res) => {
          setloading(true);
          console.log("success");
         
        
          setTimeout(() => {
            navigate("/login");
            alert("sucessfully registered");
            setloading(false);
          }, 3000);
          console.log(uid);
        })
        .catch((error) => {
          setloading(false);
          const errorCode = error.code;
          console.log(errorCode)
          // const message = errorCode.substring(5);
          // setError(titleCase(errorCode));
        });
    }
  };
  const onChangeHandler = (event) => {
    event.preventDefault();
    let val = event.target.value;
    setUserCred((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val,
      };
    });
  };
  return (
    <>
      {loading && (
        <>
          <Loader />
        </>
      )}
      <div className="Lg-form w-100  d-flex align-items-center justify-content-center">
        <div className="col-lg-7 col-sm-6 my-2 p-5 shadow bg-white rounded">
          <img
            src="https://www.campuzone.com/logo2.png"
            class="rounded mx-auto d-block "
            alt="..."
            style={{ width: "14%" }}
          />
          <form>
            <h3 className="text-center reg-head">Register</h3>
            <div className="row">
            <div className="form-group col-sm-6 ">
                <label for="exampleInputusername text-center ">UserName</label>
                <input
                  type="text"
                  name="username"
                  required
                  class="form-control"
                  value={userCred.username}
                  id="exampleInputusername"
                  placeholder="userName"
                  onChange={onChangeHandler}
                  // ref={passwordRef}
                  // onChange={(e) => setPassword(e.target.valve)}
                />
                {/* <p className="errorMsg">{passwordError}</p> */}
              </div>
              <div className="form-group col-sm-6">
                <label for="exampleInputschoolname text-center ">
                  SchoolName
                </label>
                <input
                  type="text"
                  name="schoolname"
                  required
                  class="form-control"
                  value={userCred.schoolname}
                  id="exampleInputschoolname"
                  placeholder="SchoolName"
                  onChange={onChangeHandler}
                  // ref={passwordRef}
                  // onChange={(e) => setPassword(e.target.valve)}
                />
                {/* <p className="errorMsg">{passwordError}</p> */}
              </div>
              <div className="form-group col-sm-6">
                <label for="exampleInputEmail1 text-center ">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={userCred.email}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={onChangeHandler}
                  // onChange={(e) => setEmail(e.target.valve)}
                />
                {/* <p className="errorMsg">{emailError}</p> */}
              </div>
             
              <div className="form-group col-sm-6">
                <label for="exampleInputphone text-center ">PhoneNo</label>
                <input
                  type="text"
                  name="phoneno"
                  required
                  class="form-control"
                  value={userCred.phoneno}
                  id="exampleInputschoolname"
                  placeholder="PhoneNo"
                  onChange={onChangeHandler}
                  // ref={passwordRef}
                  // onChange={(e) => setPassword(e.target.valve)}
                />
                {/* <p className="errorMsg">{passwordError}</p> */}
              </div>
              <div className="form-group col-sm-6 ">
                <label for="exampleInputPassword1 text-center ">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  class="form-control"
                  value={userCred.password}
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={onChangeHandler}
                  // ref={passwordRef}
                  // onChange={(e) => setPassword(e.target.valve)}
                />
                {/* <p className="errorMsg">{passwordError}</p> */}
              </div>
              <div className="form-group col-sm-6 ">
                <label for="exampleInputPassword2 text-center ">
                  {" "}
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  required
                  class="form-control"
                  value={userCred.confirmpassword}
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                  onChange={onChangeHandler}
                  // ref={passwordRef}
                  // onChange={(e) => setPassword(e.target.valve)}
                />
                {/* <p className="errorMsg">{passwordError}</p> */}
              </div>

             
            
              {error && (
                <small className="text-danger text-right d-block pt-2">
                  {error}
                </small>
              )}
            </div>
            <div className="btnContainer ">
              <div className="text-center my-2">
                <button
                  onClick={handleSignup}
                  style={{
                    borderRadius: "20px",
                    fontWeight: "600",
                    color: "#fff",
                    boxShadow: "0 3px 6px #00000036",
                    backgroundColor: "#dc3545",
                  }}
                  className="btn   mt-2 mx-2 px-3"
                >
                  <i class="fa fa-graduation-cap mx-1" aria-hidden="true"></i>{" "}
                  Register Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
