import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import LoginForm from "@/components/Forms/Login";

import s from "./style.module.scss";

import FormSubscribe from "@/components/Forms/Subscribe";

function Open(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Head>
        <title>
          Get the pay hike you deserve | Ace your performance review
        </title>
        <meta
          name="description"
          content="Get that promotion | Used by 5100+ employees in top US companies | Let your hard work be seen | The tool that every employee needs | Get access NOW"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={s.header}>
        <div className="container">
          <figure className={s.logo}>
            <Image
              src="/images/logo.jpg"
              alt="Bloom At Work"
              width="402"
              height="48"
            />
          </figure>

          <div className={s.action} onClick={handleShow}>
            Login
          </div>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Open;
