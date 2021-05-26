import React, { useState } from "react";
import "./LoginPage.css";
import axios from 'axios'


const LoginPage = (props) => {

  const handleLogin = () => {
    props.history.push('/Home')
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
