import React, { useState } from "react";
import s from "../style.module.scss";

function Login() {
  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    setIsError(true);
  };

  return (
    <div className={s.form}>
      <form className={s.m0} action="">
        <div className={s.group}>
          <input type="text" placeholder="Email" />
        </div>
        <div className={s.group}>
          <input type="text" placeholder="Password" />
        </div>

        <div className={s.action}>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>

        {isError && <div className={s.error}>Account doesn&apos;t exist</div>}
      </form>
    </div>
  );
}

export default Login;
