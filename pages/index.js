import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { siteTitle } from "../lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Sandeep</strong>. I'm software engineer and web
          enthusiast. I work with HTML, Javascript, CSS extensively and
          everything else in between that fuels modern <i>WWW</i>.
        </p>
        <p>
          When I am not programming, I am perfecting my <strong>P</strong>
          hotography &amp; generally, <strong>C</strong>reative skills.
        </p>
        <p className={utilStyles.headingSm}>
          <Image
            priority
            src="/walk_person.svg"
            height={50}
            width={50}
            alt={"journey icon"}
            color={"red"}
          />
          <span style={{ fontSize: "1em" }}>
            <a href="/skp_cv.docx">About My Journey, So Far...</a>
          </span>
        </p>
      </section>
    </Layout>
  );
}
