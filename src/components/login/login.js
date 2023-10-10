import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import API_BASE_URL from "../../config/api";
import styles from "./LoginPage.module.css";
import { socket } from "../../socket";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "POST",
      url: `${API_BASE_URL}/`,
      data: {
        email,
        password,
      },
    });

    console.log(res);
    if (res.data.status === "Success") {
      socket.connect();
      navigate("/chat");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            // required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            // required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
