import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ProgressBar from "react-bootstrap/ProgressBar";
import { getAnalytics, logEvent } from "firebase/analytics";

import Layout from "@/layouts/open";

import s from "@/sections/access/style.module.scss";

function Pay() {
  const router = useRouter();
  const [load, setLoad] = useState(0);
  const [fail, setFail] = useState(false);

  const handleOutshine = (e) => {
    e.prevenDefault;
    const analytics = getAnalytics();

    if (e === "outshine") {
      logEvent(analytics, "page-access-loading", {
        element: "button",
        action: "click",
        stage: "outshine",
      });
    } else {
      logEvent(analytics, "page-access-loading", {
        element: "link",
        action: "click",
        stage: "no-outshine",
      });
    }

    router.push("/access/sold");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(30);
    }, 1000);

    setTimeout(() => {
      setLoad(65);
    }, 2000);

    setTimeout(() => {
      setLoad(80);
    }, 3000);

    setTimeout(() => {
      setFail(true);
    }, 4000);
  }, []);

  const renderAction = () => {
    return (
      <div className={`${s.action} ${s.alignCenter}`}>
        <div className="container">
          <button type="button" onClick={() => handleOutshine("outshine")}>
            <i>&#128722;</i>

            <span>Instant access to OUTSHINE AT WORK for $49 only</span>
          </button>

          <p>
            <Link href="/access/sold">
              <a onClick={() => handleOutshine("no-outshine")}>
                No I don&apos;t want to outshine with this valuable E-book
              </a>
            </Link>
          </p>
        </div>
      </div>
    );
  };

  return (
    <Layout page="access">
      <div className={s.access}>
        <div className="container">
          <div className={s.loader}>
            <div className={s.bar}>
              <ProgressBar animated variant="success" now={load} />
            </div>

            <div className={s.status}>
              <figure>
                <Image
                  src="/images/wait.jpg"
                  alt="loading status"
                  width="131"
                  height="131"
                />
              </figure>

              <p>Your order is not complete yet</p>
            </div>
          </div>
        </div>

        <div className={s.features}>
          <div className="container">
            <h3>Add this E-Book to cart</h3>
            <div className={s.imageCol}>
              <figure>
                <Image
                  src="/images/ebook.jpg"
                  alt="ebook, outshine at work"
                  width="502"
                  height="377"
                />
              </figure>
              <div>
                <h5 className={`${s.title} ${s.col}`}>
                  Get access to the E-Book every employee needs
                </h5>

                <ul className={s.col}>
                  <li>Get noticed at work</li>
                  <li>How to get that promotion</li>
                  <li>HR approved pay hike tips</li>
                  <li>Exceed your managers expectations</li>
                  <li>Start enjoying office, stress free</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {renderAction()}
      </div>
    </Layout>
  );
}

export default Pay;
