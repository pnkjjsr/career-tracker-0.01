import React from "react";
import s from "./style.module.scss";

import FormSubscribe from "@/components/Forms/Subscribe";

function Open(props) {
  return (
    <>
      <header className={s.header}>
        <div className="container">Bloom At Work</div>
      </header>

      {props.children}

      <footer className={s.footer}>
        <div class="container">
          <h3 className={s.title}>
            So are you ready to Bloom at your workplace and change your work
            life?
          </h3>
          <p>
            We only take a few members every week, so hurry and get your access
            now
          </p>

          <FormSubscribe />

          <div className={s.copy}>2022, Bloom At Work</div>
        </div>
      </footer>
    </>
  );
}

export default Open;
