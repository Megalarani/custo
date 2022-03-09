import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../Context/Context";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { GInput } from "../../Components/Settings/GInput";
import { GButton } from "../../Components/Settings/GButton";
import { ReactComponent as EditIcon } from "../../Assests/pencil.svg";

const useStyles = makeStyles({
  root: {
    width: "70%",
    margin: "auto",
    borderBottom: "1px solid #E8E8E8",
    padding: "3rem 0",
  },
  row: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "1rem",
    color: "#929292",
    "& p": {
      margin: 0,
      color: "#929292",
      width: "50%",
      fontSize: "0.9rem",
    },
  },
  input: {
    width: "60%",
    padding: "0 2rem",
  },
  inputField: {
    marginBottom: "1rem",
  },
  actions: {
    width: "10%",
    cursor: "pointer",
    "& svg": {
      width: "0.75rem",
      height: "0.75rem",
    },
  },
});

const Settings = () => {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    ctx.updateIsEditable(false);
  }, []);
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    username: ctx.user.username,
    schoolname: ctx.user.schoolname,
    phoneno: ctx.user.phoneno,
    email: ctx.user.email,
    password: ctx.user.password,
    oldPassword: "",
    newPassword: "",
  });
  const [enableUsername, setEnableUsername] = useState(false);
  const [enableSave, setEnableSave] = useState(false);
  const [error, setError] = useState(null);
  const submitHandler = ()=> {
    if (formValues.username === "" || formValues.schoolname === "" ) {
      setError("Please fill the fields");
      console.log(error)
    }
    else if (formValues.oldPassword === "" || formValues.newPassword === "") {
      console.log("why man")
      ctx.updateUser({...formValues,
        username: formValues.username,
        schoolname: formValues.schoolname,    
      }  )
    }
    else if ((formValues.newPassword === "" || !formValues.oldPassword === "") && (!formValues.newPassword === "" || !formValues.oldPassword === "")) {
      setError("Please fill the two password  fields");
      console.log(error)
    }
   else if (formValues.newPassword === formValues.oldPassword ){
     setError("old password and new password are match")
   }
   else if(formValues.username === "" || formValues.schoolname === "" ){
    ctx.updateUser({...formValues,
      oldPassword: formValues.oldPassword,
      newPassword: formValues.newPassword,    
    }  )
   }
   else{
    ctx.updateUser({...formValues,
      username: formValues.username,
      schoolname: formValues.schoolname,
      oldPassword: formValues.oldPassword,
      newPassword: formValues.newPassword,    
    }  )
   }
  }
  

  const handleChange = (inputObj) => {
    setFormValues({
      ...formValues,
      [inputObj.id]: inputObj.value,
    });
    setEnableSave(true);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.row}>
          <div className={classes.label}>
            <Typography>Username</Typography>
            <span>:</span>
          </div>
          <div className={classes.input}>
            <GInput
              id={"username"}
              value={formValues.username}
              onInputChange={handleChange}
              variant="standard"
              disabled={!enableUsername}
              inputClass={classes.inputField}
              placeholder="Username"
            />
          </div>
          <div
            className={classes.actions}
            onClick={() => setEnableUsername(!enableUsername)}
          >
            <span
              class="btn px-4 py-1"
              style={{
                color: !enableUsername ? "#fff" : "#dc3545",
                background: !enableUsername ? "#dc3545" : "#fff",
                borderRadius: "20px",
                boxShadow: "0 3px 6px #00000036",
              }}
            >
              {" "}
              Edit Details
              <EditIcon
                style={{
                  fill: !enableUsername ? "#fff" : "#dc3545",
                  marginLeft: "10px",
                }}
              />
            </span>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>
            <Typography>School Name</Typography>
            <span>:</span>
          </div>
          <div className={classes.input}>
            <GInput
              id={"schoolname"}
              value={formValues.schoolname}
              onInputChange={handleChange}
              variant="standard"
              disabled={!enableUsername}
              inputClass={classes.inputField}
              placeholder="Enter School Name"
            />
          </div>
          <div className={classes.actions}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>
            <Typography>Mobile No</Typography>
            <span>:</span>
          </div>
          <div className={classes.input}>
            <GInput
              id={"phoneno"}
              value={formValues.phoneno}
              onInputChange={handleChange}
              variant="standard"
              disabled
              inputClass={classes.inputField}
              placeholder="Mobile No"
            />
          </div>
          <div className={classes.actions}></div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>
            <Typography>Email</Typography>
            <span>:</span>
          </div>
          <div className={classes.input}>
            <GInput
              id={"email"}
              value={formValues.email}
              onInputChange={handleChange}
              variant="standard"
              disabled
              inputClass={classes.inputField}
              placeholder="Email"
            />
          </div>
          <div className={classes.actions}></div>
        </div>
        <div className={classes.row} style={{ marginBottom: "2rem" }}>
          <div className={classes.label}>
            <Typography>Change Password</Typography>
            <span>:</span>
          </div>
          <div className={classes.input}>
            <GInput
              id={"oldPassword"}
              value={formValues.oldPassword}
              onInputChange={handleChange}
              variant="standard"
              type="password"
              disabled={!enableUsername}
              inputClass={classes.inputField}
              placeholder="Old Password"
              maxLength={15}
            />
            <GInput
              id={"newPassword"}
              value={formValues.newPassword}
              onInputChange={handleChange}
              variant="standard"
              type="password"
              disabled={!enableUsername}
              inputClass={classes.inputField}
              placeholder="New Password"
              maxLength={15}
            />
          </div>
          <div className={classes.actions}></div>
        </div>
        <GButton
          onClick={() => submitHandler()}
          label="Save"
          disabled={!enableSave}
          boxShadow
          isLong
        />
      </div>
    </>
  );
};

export default Settings;
