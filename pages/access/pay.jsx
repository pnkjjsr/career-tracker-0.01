import React from "react";
import { useRouter } from "next/router";

import Layout from "@/layouts/open";

import s from "@/sections/access/style.module.scss";

function Pay() {
  const router = useRouter();

  const handlePay = (e) => {
    e.prevenDefault;
    router.push("/access/loading");
  };

  return (
    <Layout page="access">
      <div className={s.access}>
        <div className="container">
          <div className={s.intro}>
            <h2>Name,</h2>
            <p>
              Thanks for taking the <span>1st step</span> and deciding to invest
              in yourself.
            </p>

            <div className={s.review}>
              <p>
                &quot;Finally a software tool for professionals to shine at
                work&quot;
              </p>

              <div>
                James Clarke, <span>Founder (IT club Global)</span>
              </div>
            </div>
          </div>
        </div>

        <div className={s.features}>
          <div className="container">
            <h5 className={s.title}>Step 2</h5>
            <p>
              Now let us give you the power to outshine. Here is what you get
            </p>

            <ul>
              <li>Unlimited work profiles</li>
              <li>AI generated quarterly work portfolio</li>
              <li>Email support</li>
              <li>Dedicated dev for onboarding</li>
              <li>Multiple device support</li>
              <li>Access for 12 months</li>
            </ul>
          </div>
        </div>

        <div className={s.action}>
          <div className="container">
            <button type="button" onClick={handlePay}>
              Get access $20/year
              <small>Less than $2/month</small>
            </button>

            <p>100% safe payment, powered by stripe</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Pay;
