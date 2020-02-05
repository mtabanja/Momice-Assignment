import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function RegisterForm(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [gender, setGender] = React.useState("");

  const onChange = event => {
    setGender(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const both = () => {
    props.callBack(gender);

    setTimeout(() => {
      props.onSubmit();
    }, 2000);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="image-container"></div>
        <div className="form-container">
          <Col>
            <TextField
              name="firstName"
              className="inputs"
              id="filled-disabled"
              label="First Name"
              style={{ marginBottom: "10%" }}
              value={props.state}
              onChange={props.onChange}
            />
          </Col>
          <Col>
            <TextField
              name="lastName"
              className="inputs"
              id="filled-disabled"
              label="Last Name"
              style={{ marginBottom: "10%" }}
              value={props.state}
              onChange={props.onChange}
            />
          </Col>
          <Col>
            <TextField
              name="email"
              className="inputs"
              id="filled-disabled"
              label="Email"
              style={{ marginBottom: "10%" }}
              value={props.state}
              onChange={props.onChange}
            />
          </Col>
          <Col>
            <TextField
              name="hobbies"
              className="inputs"
              id="filled-disabled"
              label="Hobbies"
              style={{ marginBottom: "10%" }}
              value={props.state}
              onChange={props.onChange}
            />
          </Col>
          <Col style={{ display: "table", margin: "auto" }}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={gender}
                onChange={onChange}
                name="gender"
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </FormControl>
          </Col>

          <Button
            variant="outlined"
            onClick={both}
            style={{ display: "table", margin: "auto", marginTop: "10%" }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(RegisterForm);
