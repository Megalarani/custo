import { useNavigate } from "react-router-dom";
import {  auth } from "../../services/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {  useState } from "react";
import Dashboard from "../Editable/Dashboard";

const Login = (props) => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  // const currentuser = useAuth();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  onAuthStateChanged(auth, (currentuser) => {
    setUser(currentuser);
  });
  console.log(user,"ak")
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = signInWithEmailAndPassword(auth, email, password).then(
        (res) => {
          localStorage.setItem("editablecampuz",user);
          user && navigate("/admin");
        }
      );
      console.log(user);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="Lg-form w-100 d-flex align-items-center justify-content-center">
        <div className="col-lg-4 col-sm-5 p-5 shadow bg-white rounded">
          <img
            src="https://www.campuzone.com/logo2.png"
            class="rounded mx-auto d-block w-25"
            alt="..."
          />
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1 text-center ">Email address</label>
              <input
                type="email"
                required
                value={email}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                // onChange={(e) => setEmail(e.target.valve)}
              />
              <p className="errorMsg">{emailError}</p>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1 text-center ">Password</label>
              <input
                type="password"
                required
                class="form-control"
                value={password}
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                // ref={passwordRef}
                // onChange={(e) => setPassword(e.target.valve)}
              />
              <p className="errorMsg">{passwordError}</p>
            </div>
            <div className="btnContainer ">
              <button
                onClick={handleLogin}
                className="btn btn-danger px-3 mx-2"
              >
             Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Dashboard user={user}/> */}
    </>
  );
};
export default Login;
