import React from "react";

import s from "./style.module.scss";

function Subscribe() {
  return (
    <div className={s.form}>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <button>Get acess</button>
      </form>
    </div>
  );
}

export default Subscribe;
