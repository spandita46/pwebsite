import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { siteTitle } from '../lib/constants';

export default function Home({ allPosts }) {
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
      </section>
    </Layout>
  );
}
