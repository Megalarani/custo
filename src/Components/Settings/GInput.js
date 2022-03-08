import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "35px",
    position: "relative",
  },
  textIcon: {
    width: "16px",
    height: "16px",
    position: "absolute",
    zIndex: 1,
    left: "10px",
    top: "8px",
  },
  textField: {
    height: "100%",
    width: "100%",
    "& .MuiInputBase-root": {
      height: "100%",
      "& fieldset": {
        borderColor: "#C2C2C2",
        borderRadius: "20px",
        borderWidth: "1px",
      },
      "&.Mui-focused": {
        "& fieldset": {
          borderColor: "#929292",
          borderWidth: "1px",
        },
      },
      "&.MuiInput-underline": {
        "&:before": {
          borderColor: "#C2C2C2",
        },
        "&:after": {
          borderColor: "#929292",
          borderWidth: "1px",
        },
      },
    },
    "& input": {
      fontSize: "0.9rem",
      color: "#929292",
      "&.Mui-disabled": {
        color: "#AEAEAE",
      },
    },
  },
  textFieldWithIcon: {
    "& .MuiInputBase-root": {
      paddingLeft: "20px",
    },
  },
});

export const GInput = (props) => {
  const classes = useStyles();
  const {
    onInputChange,
    placeholder = "",
    disabled = false,
    type = "text",
    variant = "outlined",
    id,
    value,
    Icon,
    inputClass,
    maxLength,
    minLength,
  } = props;

  const onLocalChange = (e) => {
    onInputChange({
      id,
      value: e.target.value,
    });
  };

  return (
    <div className={(classes.root, inputClass ? inputClass : "")}>
      {Icon && <Icon className={classes.textIcon} />}
      <TextField
        className={(classes.textField, Icon ? classes.textFieldWithIcon : "")}
        margin={"none"}
        onChange={onLocalChange}
        disabled={disabled}
        variant={variant}
        placeholder={placeholder}
        defaultValue={value}
        inputProps={{
          maxLength: maxLength,
          minLength: minLength,
          type: type,
        }}
      />
    </div>
  );
};
