import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import LogOut from "./components/Logout";
import { loginUrl } from "./settings";
import LogIn from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from "./components/WelcomePage";

function App() {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const logInFunc = async (user) => {
    const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    setUserName(data.username);
    setUserRole(data.role);
    if (data.username != null && data.username != "") {
      setLoggedIn(true);
    }
  };
  
  const logOutFunc = async () => {
    setLoggedIn(false);
    setUserName("");
    setUserRole("");
  };

  return (
    <div className="App">
      <Header />
      {!loggedIn && <LogIn onAdd={logInFunc} />}
      {loggedIn && <LogOut onClick={logOutFunc} />}

      {loggedIn && <WelcomePage name={userName} role={userRole} />}

      {loggedIn && (
        <nav className="borderNoTop">
          <Link to="/">Home</Link>
        </nav>
      )}
      <Outlet />



      <Footer />
    </div>
  );
}

export default App;