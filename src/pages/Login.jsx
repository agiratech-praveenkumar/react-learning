import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import UserContext from "../context/UserContext";
import Alerts from "../components/Alerts";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [mobilenumber, setMobilenumber] = useState();
  const [password, setPassword] = useState();
  const [alert, setAlert] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      user: {
        mobile_number: mobilenumber,
        password: password,
      },
    };

    try {
      const res = await axios.post("api/login", data);

      if (res.status == 200) {
        setAlert(JSON.stringify(res.data.message));
        setMobilenumber("");
        setPassword("");
        setUser(JSON.stringify(res.data.data));
      }
    } catch (err) {
      if (err.response.status == 401) {
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
            label="Mobile Number"
            variant="outlined"
            value={mobilenumber}
            onChange={(e) => setMobilenumber(e.target.value)}
            size="small"
            margin="dense"
          />
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
            Login
          </Button>
        </form>
        <p>
          Dont have an account? <Link to="/Signup">Signup</Link>
        </p>
        {user}
      </Container>
    </>
  );
};

export default Login;
