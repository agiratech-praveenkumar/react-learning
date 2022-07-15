import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./styles/GlobalStyle.styles";
import UserContext from "./context/UserContext"
import { useState } from "react";

function App() {
  const [user, setUser] = useState('');
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
          <Navbar title="app-title" />
          <Routes>
            <Route path="/" index element={<Home name="Title" />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
