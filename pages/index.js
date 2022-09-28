import Head from 'next/head'
import Image from "next/image";

import Layout from "@/layouts/open"

import FormSubscribe from "@/components/Forms/Subscribe";

import s from '@/sections/index/style.module.scss'

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Bloom At Work</title>
        <meta name="description" content="Bloom At Work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout page="home">
        <div className={s.subscribe}>

          <section className={s.features}>
            <div className={`container ${s.shine}`}>
              <div className={`${s.content}`}>
                <h1 className={s.title}>Shine at your workplace!</h1>
                <p>Finally a productivity software tool for working professionals to showcase their work and get noticed at work</p>

                <FormSubscribe />
              </div>
            </div>
            <div className={s.strip}>Trusted by 5,000+ working professionals in USA</div>
          </section>

          <section className={`${s.features} ${s.alignCenter}`}>
            <div className={`container`}>

              <h3 className={s.title}>The tool that every employee needs today</h3>
              <p>Imagine all the hard work you put in is neatly organized & beautifully presented at the time of your performance review</p>
              <figure>
                <Image src="/images/tool.jpg" alt="Bloom at work tool" width="1036" height="544" />
              </figure>

              <h6>We only take limited members every week, hurry get your access now</h6>

              <FormSubscribe />

            </div>
          </section>

          <section className={`${s.features} ${s.alignCenter} ${s.perf}`}>
            <div className={`container ${s.perf}`}>

              <h3 className={s.title}>Unlock the Tools that will Turn you into your a super performer!</h3>
              <p>This tool has been designed in consultation with HR, managers leading large teams and head of IT firms. We have put everything that managers want to see in their team&apos;s work.</p>

              <ul>
                <li>Get that hike that you deserve</li>
                <li>Exceed your managers expectations</li>
                <li>Use this tool to showcase your work</li>
                <li>Be the best team performer</li>
              </ul>

              <div className={`${s.content}`}>
                <h6>Invest in your self and change your work life for good</h6>
                <FormSubscribe />
              </div>
            </div>
          </section>

          <section className={s.review}>
            <div className="container">
              <div className={s.rating}>
                ★ ★ ★ ★ ★
              </div>
              <p>
                This is such a simple tool but works like magic. I have never been able to talk so much about my work. If you use it regularly, you will see a massive difference in how you are treated at work.
              </p>

              <div className={s.reviewer}>Nick Ivy, <span>Bloom At Work user</span></div>
            </div>

          </section>
        </div>
      </Layout>
    </div >
  )
}
