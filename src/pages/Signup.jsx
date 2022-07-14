import axios from "../api/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "../components/Alerts";

const REGISTER_URL = "/api/users";

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
      const response = await axios.post(REGISTER_URL, data);
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
      <div className="container">
        <Alerts text={alert} />
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <br />
          <label>Mobile Number </label>
          <input
            type="text"
            value={mobilenumber}
            onChange={(e) => setMobilenumber(e.target.value)}
            // required
          />
          <br />
          <label>Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
          <br />
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
          <br />
          <input type="submit" value="Register" />
        </form>

        {/* {`${fullname} / ${mobilenumber} / ${email} / ${password}`} */}
      </div>
    </>
  );
};

export default Signup;
