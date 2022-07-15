import axios from "../api/axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerts from "../components/Alerts";
import { Button, Container, TextField } from "@mui/material";
import UserContext from "../context/UserContext";

const Signup = () => {
  // let navigate = useNavigate();

  const [fullname, setFullname] = useState();
  const [mobilenumber, setMobilenumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      user: {
        full_name: fullname,
        mobile_number: mobilenumber,
        email: email,
        password: password,
      },
    };

    try {
      const response = await axios.post("/api/users", data);
      if (response.status == 200) {
        setAlert(JSON.stringify(response.data.message));
        setFullname("");
        setMobilenumber("");
        setEmail("");
        setPassword("");
        // navigate("/login");
      }
    } catch (err) {
      if (err.response.status == 400) {
        setAlert(JSON.stringify(err.response.data.message));
      }
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Alerts text={alert} />
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            size="small"
            margin="dense"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            value={mobilenumber}
            onChange={(e) => setMobilenumber(e.target.value)}
            size="small"
            margin="dense"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            margin="dense"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            margin="dense"
          />
          <br />
          <Button variant="outlined" type="submit">
            Register
          </Button>
        </form>

        <p>
          Having an Account? <Link to="/login">Login</Link> here.
        </p>
      </Container>
    </>
  );
};

export default Signup;
