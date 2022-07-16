import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import React from "react";
import { devName as name, siteTitle } from "../../lib/constants";
import Avatar from "../avatar";
import GitHubSocial from "../socials/github";
import LinkedinSocial from "../socials/linkedin";
import InstagramSocial from "../socials/instagram";
import DiscordSocial from "../socials/discord";
import MailSocial from "../socials/mail";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Professional profile and resume website for Sandeep Kumar Pandita"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <React.Fragment>
            <Avatar height={256} width={256} />
            <h1 className={`${utilStyles.heading2Xl} ${styles.devName}`}>
              {name}
            </h1>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </React.Fragment>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
        <div className={styles.socialLinkscontainer}>
          <MailSocial />
          <LinkedinSocial />
          <GitHubSocial />
          <DiscordSocial />
          <InstagramSocial />
        </div>
      </footer>
    </div>
  );
}
