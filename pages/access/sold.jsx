import React from "react";
import Image from "next/image";

import User from "@/contexts/user";
import Layout from "@/layouts/open";

import s from "@/sections/access/style.module.scss";

function Pay() {
  const {
    state: { name },
  } = User();

  return (
    <Layout page="access">
      <div className={s.access}>
        <div className="container">
          <div className={s.sold}>
            <Image
              src="/images/sold.jpg"
              alt="Sold Out"
              width="319"
              height="254"
            />

            <h1 className={s.title}>
              Sorry, {name}
              <small>Unfortunately, we are sold out.</small>
            </h1>

            <p>
              We only accept limited new members every month and this months
              seats are full. We will notify you when we have seats
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pay;
