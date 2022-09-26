import React from "react";
import { useRouter } from "next/router";

import s from "./style.module.scss";

function Subscribe() {
  const router = useRouter();

  const handleAccess = (e) => {
    e.prevenDefault;
    router.push("/access/pay");
  };

  return (
    <div className={s.form}>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <button type="button" onClick={handleAccess}>
          Get access
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
