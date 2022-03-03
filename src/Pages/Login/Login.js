import { useState, useContext } from "react";
import { AppContext } from "../../Context/Context";

const Login = (props) => {
  const { userAuthentication } = useContext(AppContext);
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    console.log(user);
    userAuthentication(e, "login", user);
  };
  const onChangeHandler = (event) => {
    event.preventDefault();
    let val = event.target.value;
    setUser((prevState) => {
      return {
        ...prevState,
        [event.target.name]: val,
      };
    });
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
                name="email"
                required
                value={user.email}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={onChangeHandler}
                // onChange={(e) => setEmail(e.target.valve)}
              />
              {/* <p className="errorMsg">{emailError}</p> */}
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1 text-center ">Password</label>
              <input
                type="password"
                name="password"
                required
                class="form-control"
                value={user.password}
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={onChangeHandler}
                // ref={passwordRef}
                // onChange={(e) => setPassword(e.target.valve)}
              />
              {/* <p className="errorMsg">{passwordError}</p> */}
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
