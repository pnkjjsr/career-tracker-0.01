import React from "react";
import Image from "next/image";
import s from "./style.module.scss";

import FormSubscribe from "@/components/Forms/Subscribe";

function Open(props) {
  return (
    <>
      <header className={s.header}>
        <div className="container">
          <Image src="/images/logo.jpg" alt="Bloom At Work" width="402" height="48" />
        </div>
      </header>

      <main className={`${s.main} ${props.page !== "home" && s.access}`}>
        {props.children}
      </main>

      <footer className={s.footer}>
        <div className="container">
          {props.page === "home" && (
            <>
              <h3 className={s.title}>
                So are you ready to Bloom at your workplace and change your work
                life?
              </h3>
              <p>
                We only take a few members every week, so hurry and get your
                access now
              </p>

              <FormSubscribe />
            </>
          )}

          <div className={s.copy}>2022, Bloom At Work</div>
        </div>
      </footer>
    </>
  );
}

export default Open;
