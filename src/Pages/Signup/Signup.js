import { useState, useContext } from "react";
import AuthContext from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import Loader from "../../loader/Loader";
const Signup = (props) => {
  const ctx = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
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
    } else {
      createUserWithEmailAndPassword(auth, userCred.email, userCred.password)
        .then((res) => {
          console.log("success");
          setloading(true);
          setTimeout(() => {
             navigate("/login");
            alert("sucessfully registered");
            setloading(false)
          }, 3000);
          
        })
        .catch((error) => {
          setloading(false);
          const errorCode = error.code;
          const message = errorCode.substring(5);
          setError(titleCase(message));
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
      <div className="Lg-form w-100 d-flex align-items-center justify-content-center">
        <div className="col-lg-4 col-sm-5 p-5 shadow bg-white rounded">
          <img
            src="https://www.campuzone.com/logo2.png"
            class="rounded mx-auto d-block w-25"
            alt="..."
          />
          <form>
            <h3 className="text-center reg-head">Register</h3>
            <div className="form-group">
              <label for="exampleInputEmail1 text-center ">Email address</label>
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
            <div className="form-group ">
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
            {error && (
              <small className="text-danger text-right d-block pt-2">
                {error}
              </small>
            )}
             <div className="form-group ">
              <label for="exampleInputPassword1 text-center ">UserName</label>
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
            <div className="form-group ">
              <label for="exampleInputPassword1 text-center ">SchoolName</label>
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
            <div className="btnContainer ">
              <div className="text-center my-2">
                <button
                  onClick={handleSignup}
                  className="btn btn-danger mt-2 mx-2 px-3"
                >
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
