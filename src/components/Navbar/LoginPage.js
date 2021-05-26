import React, { useState } from "react";
import "./LoginPage.css";
import axios from 'axios'
import { setUserSession } from "../../Utils/Common";


const LoginPage = (props) => {

  

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post("http://localhost:3001/api/user/login",{
      Email: email,
      Password: pass,
    }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user)
      props.history.push('/Home')
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 400 || error.response.status === 400){
        setError(error.response.data.message);
      }
      else {
        setError("Something went wrong !!")
      }

    })
    
  }
  

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      Login <br /> <br />
      <div>
        Username
        <br />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        Password
        <br />
        <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
      </div>{" "}
      <br />
      {error && <div className="error">{error}</div>}
      <input
        type="button"
        value={loading ? "Loading...." : "Login"}
        disabled={loading}
        onClick={handleLogin}
      />
    </div>
  );
};
export default LoginPage;
