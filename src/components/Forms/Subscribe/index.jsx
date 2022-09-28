import React, { useState } from "react";
import { useRouter } from "next/router";
import Spinner from "react-bootstrap/Spinner";
import { getAnalytics, logEvent } from "firebase/analytics";

import { db } from "@/libs/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import User from "@/contexts/user";

import validation from "./validation";
import s from "./style.module.scss";

function Subscribe() {
  const router = useRouter();
  const {
    actions: { setName },
  } = User();
  const [form, setForm] = useState({
    type: "",
    email: "",
    emailErr: false,
    emailErrText: "",
    name: "",
    nameErr: false,
    nameErrText: "",
  });
  const [isClick, setIsClick] = useState(false);

  const handleValidation = (el) => {
    const { valid, errors } = validation(el);
    let err = `${el.name}Err`;
    let errText = `${el.name}ErrText`;

    let val = el.value;
    let name = el.name;

    if (!valid) {
      setForm({
        ...form,
        [name]: val,
        [err]: true,
        [errText]: errors[el.name],
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    let el = e.target;
    let val = el.value;
    let name = el.name;

    let isValid = handleValidation(el);
    if (!isValid) return;

    let err = `${el.name}Err`;
    let errText = `${el.name}ErrText`;

    setForm({ ...form, [name]: val, [err]: false, [errText]: "" });
  };

  const handleSubmitValidation = () => {
    const { email, emailErr, name, nameErr } = form;

    if (emailErr || nameErr || !email || !name) {
      setForm({
        ...form,
        nameErrText: "please enter name",
        errName: true,
        emailErrText: "please enter email",
        emailErr: true,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const analytics = getAnalytics();

    logEvent(analytics, "form-subscribe", {
      element: "button",
      action: "click",
      stage: "first-click",
    });

    let valid = handleSubmitValidation();
    if (!valid) {
      logEvent(analytics, "form-subscribe", {
        element: "button",
        action: "click",
        stage: "not-valid",
      });
      return;
    }

    setIsClick(true);
    setName(form.name);
    post();
  };

  const post = async () => {
    const analytics = getAnalytics();
    const { type, email, name } = form;

    let postData = {
      createdate: new Date().toISOString(),
      email,
      name,
      type: "subscribe-ideation",
    };

    const docRef = await addDoc(collection(db, "subscribers"), postData);
    await updateDoc(doc(db, "subscribers", docRef.id), { id: docRef.id });

    logEvent(analytics, "form-subscribe", {
      element: "button",
      action: "click",
      stage: "data-saved",
    });

    setForm({ email: "", name: "" });
    router.push("/access/pay");
  };

  const { nameErrText, emailErrText } = form;
  return (
    <div className={s.form}>
      <form action="" onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className={s.group}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
          <small>{nameErrText}</small>
        </div>

        <div className={s.group}>
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
          />
          <small>{emailErrText}</small>
        </div>

        <button type="submit">
          {!isClick && "Get access"}

          {isClick && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
