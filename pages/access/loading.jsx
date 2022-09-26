import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ProgressBar from "react-bootstrap/ProgressBar";

import Layout from "@/layouts/open";

import s from "@/sections/access/style.module.scss";

function Pay() {
  const router = useRouter();

  const handleSold = (e) => {
    e.prevenDefault;
    router.push("/access/sold");
  };

  return (
    <Layout page="access">
      <div className={s.access}>
        <div className="container">
          <div className={s.loader}>
            <div className={s.bar}>
              <ProgressBar animated variant="success" now={75} />
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

              <p>Your order is not completed yet</p>
            </div>
          </div>
        </div>

        <div className={s.features}>
          <div className="container">
            <div className={s.imageCol}>
              <figure>
                <Image
                  src="/images/ebook.jpg"
                  alt="ebook, outshine at work"
                  width="502"
                  height="377"
                />
              </figure>
              <ul className={s.col}>
                <li>
                  <h5 className={`${s.title} ${s.col}`}>
                    Get access to the E-Book every employee needs
                  </h5>
                </li>
                <li>&#10003; Get noticed at work</li>
                <li>&#10003; How to get that promotion</li>
                <li>&#10003; HR approved pay hike tips</li>
                <li>&#10003; Exceed your managers expectations</li>
                <li>&#10003; Start enjoying office, stress free</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${s.action} ${s.alignCenter}`}>
          <div className="container">
            <button type="button" onClick={handleSold}>
              Instant access to OUTSHINE AT WORK for $49 only
            </button>

            <p>
              <Link href="/access/sold">
                <a>
                  No I don&apos;t want to outshine with this valuable E-book
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pay;
