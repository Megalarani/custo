import React, { useContext,useState, useEffect } from "react";
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
    username: ctx.user.name,
    schoolName: ctx.user.school,
    mobileNumber: ctx.user.mobile,
    emailId: ctx.user.number,
    oldPassword: "",
    newPassword: "",
  });
  const [enableUsername, setEnableUsername] = useState(false);
  const [enableSave, setEnableSave] = useState(false);

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
           <span class="btn shadow text-white"  style={{background: "#dc3545", borderRadius:"20px"}}> <EditIcon style={{color:"white"}}/> Edit</span>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>
            <Typography>School Name</Typography>
            <span>:</span>
          </div>
          <div className={classes.input}>
            <GInput
              id={"schoolName"}
              value={formValues.mobileNumber}
              onInputChange={handleChange}
              variant="standard"
              disabled={!enableUsername}
              inputClass={classes.inputField}
              placeholder="Mobile No"
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
              id={"mobileNumber"}
              value={formValues.mobileNumber}
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
              id={"emailId"}
              value={formValues.emailId}
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
          onClick={() => console.log("saved")}
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
